import __ from "@foragefox/doubledash";
import Transition from "./Transition";

class TransitionVideo extends Transition {
	
    constructor(element, options) {
        super(element);

        this.options = __.lang.extend(true, Transition.DEFAULTS, TransitionVideo.DEFAULTS, typeof options == 'object' && options);
	}

    start() {
        // 1. load video
        // 2. trigger super.end() once video ends
        let video = __.dom.append(__.dom.create('video', { 
            src: './img/general/symplr_VIVEKioskTransition.mp4',
            class: 'transition-video',
            autoplay: true,
        }), this.element);

        super.start();
        
        __.event.on(video, 'ended', () => {
            super.end();
        });
       
    }

}

TransitionVideo.DEFAULTS = {
};

export default TransitionVideo;