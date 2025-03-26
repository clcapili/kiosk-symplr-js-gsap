import __ from "@foragefox/doubledash";
import { gsap } from "gsap";
import Section from '../Section'

class TimeLine extends Section {
	
    constructor(element, options) {
        super(element)
        this.options = __.lang.extend(true, Section.DEFAULTS, TimeLine.DEFAULTS, typeof options == 'object' && options);
        
        this.animation = null;
        this.currentTween = null;

        this.initEvents();
        this.initTimeline();

        this.options.onLoad();
	}

    initEvents() {
        __.event.on(this.element, 'click', '[data-jump]', (event) => this.jumpTo(event.delegateTarget.dataset.jump)) 
    }

    initTimeline() {
        this.animation = gsap.timeline({paused: true});

        for (let i = 0; i < this.options.data.length; i++) {
            for (let j = 0; j < this.options.data[i].elements.length; j++) {
                let element = this.options.data[i].elements[j]
    
                if (element.from)
                    this.animation.from(element.selector, element.from)
                
                if (element.position) {
                    this.animation.to(element.selector, element.to, element.position)
                } else {
                    this.animation.to(element.selector, element.to)     
                }
                
            }

            this.options.data[i].onEnter = this.options.data[i].onEnter ? this.options.data[i].onEnter : (next, past, direction) => {};
            this.options.data[i].onLeave = this.options.data[i].onLeave ? this.options.data[i].onLeave : (next, past, direction) => {};
            this.options.data[i].onComplete = this.options.data[i].onComplete ? this.options.data[i].onComplete : (next, past, direction) => {};
    
            this.scenes.push(this.options.data[i].label);
            this.animation.add(this.options.data[i].label);
        }

     
    }

    jumpTo(scene) {
        let currentIndex = this.sceneIndex;
        let newIndex = -1;
        let seek = false;

        if (scene == 'prev' || scene == this.scenes[currentIndex - 1]) {
            if (currentIndex > 0) {
                newIndex = currentIndex - 1;
            }
        } else if (scene == 'next' || scene == this.scenes[currentIndex + 1]) {
            if (currentIndex < (this.scenes.length - 1)) {
                newIndex = currentIndex + 1;
            }   
            
        } else {
            for (let i = 0; i < this.scenes.length; i++) {
                if (this.scenes[i] == scene) {
                    newIndex = i;
                }
            }

            seek = true;
        }

        if (scene == this.scenes[currentIndex]) return;
        
        if (newIndex < 0) return;

        if (seek && this.currentTween && this.currentTween.isActive()) return;

        this.sceneIndex = newIndex;

        const currentScene = this.options.data[currentIndex];
        const upcomingScene = this.options.data[this.sceneIndex];

        const direction = newIndex > currentIndex ? 'forwards' : 'backwards';
        
        if (seek) {
        
            currentScene.onLeave(upcomingScene, currentScene, direction);   

            upcomingScene.onEnter(upcomingScene, currentScene, direction);

            this.animation.seek(scene, false);

            upcomingScene.onComplete(upcomingScene, currentScene, direction)
                
        } else {
            currentScene.onLeave(upcomingScene, currentScene, direction);

            upcomingScene.onEnter(upcomingScene, currentScene, direction);

            this.currentTween = this.animation.tweenFromTo(
                this.scenes[currentIndex], 
                this.scenes[this.sceneIndex],
                {
                    onComplete: () => upcomingScene.onComplete(upcomingScene, currentScene, direction)
                }
            );

            console.log('--');
        }

        

        
        this.options.onSceneChange(this.scenes[this.sceneIndex]);
    }
    
    onShow() {
        this.currentTween = this.animation.tweenTo(this.options.startScene);

        super.onShow();
    }
    
    onHide() {
        this.animation.restart().pause();

        super.onHide();
    }

}

TimeLine.DEFAULTS = {
};

export default TimeLine;