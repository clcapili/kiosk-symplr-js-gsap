import __ from "@foragefox/doubledash";

class Transition {
	
    constructor(element) {
        this.element = element;
	}

    start() {
        __.dom.show(this.element, 'flex');
    }

    end() {
        __.dom.hide(this.element);
        this.element.innerHTML = '';
    }

}

Transition.DEFAULTS = {};

export default Transition;