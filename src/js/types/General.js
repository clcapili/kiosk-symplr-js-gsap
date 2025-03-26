import __ from "@foragefox/doubledash";
import { gsap } from "gsap";
import Section from '../Section'

class General extends Section {
	
    constructor(element, options) {
        super(element)
        this.options = __.lang.extend(true, Section.DEFAULTS, General.DEFAULTS, typeof options == 'object' && options);

        this.initEvents();
        this.initTimeline();

        this.options.onLoad();
    }

    initEvents() {
        __.event.on(this.element, 'click', '[data-jump]', (event) => this.jumpTo(event.delegateTarget.dataset.jump)) 

    }

    initTimeline() {
        for (let i = 0; i < this.options.data.length; i++) {

            this.options.data[i].onEnter = this.options.data[i].onEnter ? this.options.data[i].onEnter : (next, past) => {};
            this.options.data[i].onLeave = this.options.data[i].onLeave ? this.options.data[i].onLeave : (next, past) => {};
            
            this.scenes.push(this.options.data[i].label);
        }
    }
        
    jumpTo(scene) {
        
        if (!scene || scene == 'null') return;

        const newIndex = this.options.data.map(element => element.label).indexOf(scene);
        const currentScene = this.options.data[this.sceneIndex];
        const upcomingScene = this.options.data[newIndex];
        
        currentScene.onLeave(upcomingScene, currentScene);

        this.options.onSceneChange(scene);

        for (let i = 0; i < upcomingScene.elements.length; i++) {
            if (upcomingScene.elements[i].to) {
                gsap.to(upcomingScene.elements[i].selector, upcomingScene.elements[i].to);
            } else if (upcomingScene.elements[i].set) {
                gsap.set(upcomingScene.elements[i].selector, upcomingScene.elements[i].set);
            }
        }
        
        upcomingScene.onEnter(upcomingScene, currentScene);
        

        this.sceneIndex = newIndex;
      
    }

    onShow() {
        this.jumpTo(this.options.startScene);

        super.onShow();
    }

    onHide() {
        this.options.onSceneChange(null);

        super.onHide();
    }   

}

General.DEFAULTS = {
};

export default General;