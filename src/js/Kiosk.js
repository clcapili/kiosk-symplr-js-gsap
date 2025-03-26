import __ from "@foragefox/doubledash";
import Header from "./Header";
import SectionController  from './SectionController'
import TransitionController from "./TransitionController"
import Restarter from "./Restarter"

class Kiosk {
	
    constructor(options) {
        this.options = __.lang.extend(true, Kiosk.DEFAULTS, typeof options == 'object' && options);
        this.window = document.querySelector('.window');

        // header
        this.header = new Header(document.querySelector('.header'));
        
        // fancybox
        Fancybox.bind("[data-fancybox]", this.options.fancybox);

        // restarter
        this.restarter = new Restarter({onTrigger: () => this.onRestartTrigger()});
      
        // transitions
	    this.transitionController = new TransitionController(document.querySelector('.transition'), this.options.transitions)
    
        // section
        this.sectionController = new SectionController({
            onBeforeChange: (sections, index) => this.onBeforeSectionChange(sections, index),
            data: this.options.sections
        })

        this.sectionController.loadSection(0);

        this.checkScreenSize();

        window.addEventListener('resize', () => this.checkScreenSize());
	}

    checkScreenSize() {
        if (window.innerHeight < 1080) {
            document.body.classList.add('window-height-sm')
        } else {
            document.body.classList.remove('window-height-sm')
        }

        if (window.innerWidth < 1920) {
            document.body.classList.add('window-width-sm')
        } else {
            document.body.classList.remove('window-width-sm')
        }
    }
  
    onBeforeSectionChange(sections, index) {
        this.header.hide();

        this.transitionController.activate(sections[index].options.transition);
    }

    onRestartTrigger() {
        this.sectionController.loadSection(0);
    }
   
}

Kiosk.DEFAULTS = {
    transitions: [], 
    sections: [],
    fancybox: {
        groupAttr: null,
        Thumbs: false,
        Toolbar: false,
        closeButton: "top",
        Carousel: {
            Navigation: false
        },
    }
};

export default Kiosk;