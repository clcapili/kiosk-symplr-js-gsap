import __ from "@foragefox/doubledash";
import General from './types/General'
import TimeLine from './types/TimeLine'

class SectionController {
	
    constructor(options) {
        this.options = __.lang.extend(true, SectionController.DEFAULTS, typeof options == 'object' && options);

        this.sections = [];
        this.navigation = [];

        this.initEvents();
        this.init();
	}

    initEvents() {
        __.event.on(document.body, 'click', '[data-section]', (event) => this.loadSection(event.delegateTarget.dataset.section));
    }

    init() {
        for (let i = 0; i < this.options.data.length; i++) {
            if (this.options.data[i].type == 'general') {
                this.addSection(new General(__.dom.findOne(this.options.data[i].selector), { 
                    ...this.options.data[i], 
                    onSceneChange: (view) => this.onSceneChange(view)
                }));
            } else if (this.options.data[i].type == 'timeline') {
                this.addSection(new TimeLine(__.dom.findOne(this.options.data[i].selector), { 
                    ...this.options.data[i], 
                    onSceneChange: (view) => this.onSceneChange(view)
                })); 
            }
        }

        // navigation items
        const navElements = __.dom.find('.navigation-bar .nav-link');
        for (let i = 0; i < navElements.length; i++) {
            this.navigation.push({ 
                el: navElements[i],
                activeStates: navElements[i].dataset.highlight ? navElements[i].dataset.highlight.split(' ') : []
            })
        }
    }

    addSection(section) {
        this.sections.push(section);
    }

    loadSection(index) {

        this.options.onBeforeChange(this.sections, index);

        for (let i = 0; i < this.sections.length; i++) {
            this.sections[i].element.classList.remove('active');
            this.sections[i].element.classList.add('hidding');
            
            this.delay(1500).then(() => {
                __.dom.hide(this.sections[i].element);
                
                this.sections[i].element.classList.remove('hidding');

                this.sections[i].onHide();
            })
        }

        this.sections[index].element.classList.add('active');
        this.delay(1500).then(() => {
            __.dom.show(this.sections[index].element, 'block');
            this.sections[index].onShow();
        })

        this.options.onAfterChange(this.sections, index);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    onSceneChange(scene) {
        document.body.dataset.currentScene = scene;

        // add class to navigation bars
        for (let i = 0; i < this.navigation.length; i++) {
            this.navigation[i].el.classList.remove('active');

            if (this.navigation[i].activeStates.includes(scene)) {
                this.navigation[i].el.classList.add('active');
            }
        }
    }

}

SectionController.DEFAULTS = {
    navigation: [],
	data: [],
    onBeforeChange: (sections, index) => {},
    onAfterChange: (sections, index) => {}
};

export default SectionController;