import __ from "@foragefox/doubledash";
import Transition from "./Transition";
import lottie from 'lottie-web';
import animationData from "../data/transition";


class TransitionLottie extends Transition {
	
    constructor(element, options) {
        super(element);

        this.options = __.lang.extend(true, Transition.DEFAULTS, TransitionLottie.DEFAULTS, typeof options == 'object' && options);
	}

    start() {
        let element = __.dom.append(__.dom.create('div', { 
            id: 'dotlottie-canvas',
            class: 'transition-lottie',
            style: "width: 1920px; height: 1080px;"
        }), this.element);

        super.start();

        const anim = lottie.loadAnimation({
            container: element, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: animationData,
           // path: '../lottie/transition.json' // the path to the animation json
        });
        
        anim.addEventListener('complete', (e) => { 
            console.log('element ended');
            super.end();
        });
    
    }

}

TransitionLottie.DEFAULTS = {
};

export default TransitionLottie;