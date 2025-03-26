(() => {
    const container = document.getElementById("transition");
    const hexagons = Array.from(container.querySelectorAll(".anima"));
    const distances = new Array(hexagons.length);
    const elements = hexagons.slice();

    const calculateDistances = (targetRect) => {
        let maxDistance = 0;
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const distance = Math.hypot(rect.x - targetRect.x, rect.y - targetRect.y);
            distances[index] = distance;
            maxDistance = Math.max(maxDistance, distance);
        });
        return maxDistance;
    };

    const applyRippleEffect = (maxDistance) => {
        const applyStyles = () => {
            elements.forEach((element, index) => {
                const rippleFactor = (distances[index] / maxDistance) * 100;
                element.style.setProperty("--ripple-factor", rippleFactor.toFixed(2));
            });
        };

        requestAnimationFrame(applyStyles);
    };

    const ripple = (target, isClick = true) => {
        
        if (container.classList.contains("show-ripple")) return;

        const targetRect = target ? target.getBoundingClientRect() : { x: 0, y: 0 };


        console.log(target);
        console.log(isClick);

        if (isClick && target) {
            target.classList.add("clicked");
        }

        const maxDistance = calculateDistances(targetRect);
        container.classList.add("show-ripple");

        applyRippleEffect(maxDistance);

        const maxElement = elements[distances.indexOf(maxDistance)];
        maxElement.addEventListener("animationend", () => {
            container.classList.remove("show-ripple");
            elements.forEach((element) => {
                element.style.removeProperty("--ripple-factor");
                if (isClick && target) element.classList.remove("clicked");
            });
        }, { once: true });

    };

    const startAnimationFromCenter = () => {
        const containerRect = container.getBoundingClientRect();
        const offsetX = -40;
        const offsetY = 80;
        const centerX = containerRect.x + (containerRect.width / 2) + offsetX;
        const centerY = containerRect.y + (containerRect.height / 2) - offsetY;

        ripple({ getBoundingClientRect: () => ({ x: centerX, y: centerY }) }, false);
    };

    window.addEventListener("load", startAnimationFromCenter);

    hexagons.forEach((hexagon) => {
        hexagon.addEventListener("click", () => ripple(hexagon));
    });

})();