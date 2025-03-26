import __ from "@foragefox/doubledash";

class Section {
	
    constructor(element) {
        this.element = element;
        
        this.sceneIndex = 0;
        this.scenes = [];
	}

    onShow() {
        this.options.onSceneChange(this.options.startScene);
    }
    
    onHide() {
        this.sceneIndex = 0;

        this.options.onSceneChange(null);
    }

}

Section.DEFAULTS = {
    startScene: null,
    onSceneChange: (view) => {},
    onLoad:() => {},
	data: []
};

export default Section;