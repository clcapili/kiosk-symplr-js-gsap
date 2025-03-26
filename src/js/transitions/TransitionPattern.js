import __ from "@foragefox/doubledash";
import Transition from "./Transition";

class TransitionPattern extends Transition {
	
    constructor(element, options) {
        super(element);

        this.options = __.lang.extend(true, Transition.DEFAULTS, TransitionPattern.DEFAULTS, typeof options == 'object' && options);
	}

    build() {
        let html = ''
        for (let i = 0; i < this.options.rows; i++) {
            html += '<div class="column">';
                for (let j = 0; j < this.options.columns; j++) {
                    html += '<div class="hexagon anima"></div>'
                }
            html += '</div>'
        }
    
        this.element.innerHTML = html;
    }

    start() {
        super.start();
        
        this.build();

        this.hexagons = __.dom.find(".anima", this.element);
        this.distances = new Array(this.hexagons.length);

        const location = this.options.location ?? this.startAnimationFromCenter();
        
        this.ripple(location, this.options.color);
    }

    calculateDistances(targetRect) {
        let maxDistance = 0;

        this.hexagons.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const distance = Math.hypot(rect.x - targetRect.x, rect.y - targetRect.y);
            this.distances[index] = distance;
            maxDistance = Math.max(maxDistance, distance);
        });

        return maxDistance;
    }

    applyRippleEffect(maxDistance) {
        const applyStyles = () => {
            this.hexagons.forEach((element, index) => {
                const rippleFactor = (this.distances[index] / maxDistance) * 100;
                element.style.setProperty("--ripple-factor", rippleFactor.toFixed(2));
            });
        };

        requestAnimationFrame(applyStyles);
    }

    ripple(location, color) {
       
        if (this.element.classList.contains("show-ripple")) return;

        if (color)
            this.element.style.setProperty("--color", color);
        
        const maxDistance = this.calculateDistances(location);
       
        this.element.classList.add("show-ripple");

        this.applyRippleEffect(maxDistance);

        const maxElement = this.hexagons[this.distances.indexOf(maxDistance)];
        maxElement.addEventListener("animationend", () => {
            this.element.classList.remove("show-ripple");
            this.hexagons.forEach(element => {
                element.style.removeProperty("--ripple-factor");
            });

            super.end()
        }, { once: true });

    }

    startAnimationFromCenter() {
        const containerRect = this.element.getBoundingClientRect();
        const offsetX = -40;
        const offsetY = 80;
        const centerX = containerRect.x + (containerRect.width / 2) + offsetX;
        const centerY = containerRect.y + (containerRect.height / 2) - offsetY;

        return { x: centerX, y: centerY };
    }

}

TransitionPattern.DEFAULTS = {
	rows: 43,
    columns: 8
};

export default TransitionPattern;