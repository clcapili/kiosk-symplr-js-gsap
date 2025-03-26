import __ from "@foragefox/doubledash";

class TransitionController {
	
    constructor(element, definitions) {
        this.element = element;
        this.transitions = [];

        for (let i = 0; i < definitions.length; i++) {
            this.transitions[definitions[i].name] = new definitions[i].type(this.element, definitions[i].options);
        }

        

    }

    activate(name) {
        this.transitions[name].start();
    }

}

export default TransitionController;