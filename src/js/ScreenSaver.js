import __ from "@foragefox/doubledash";

class ScreenSaver {
	
    constructor(element, options) {
        this.element = element;
        this.options = __.lang.extend(true, ScreenSaver.DEFAULTS, typeof options == 'object' && options);

        this.timeout = null;

        this.initEvents();
        this.resetTimer();
	}

    initEvents() {
        __.event.on(document.body, 'click', () => this.resetTimer());
        //__.event.on(document.body, 'mousemove', () => this.resetTimer()) ;
    }

    activate() {
        console.log('started screen saver');
        __.dom.show(this.element, 'block');
    }

    resetTimer() {
        __.dom.hide(this.element);
        console.log('reset screen saver timer');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => { this.activate() }, this.options.time);
    }

}

ScreenSaver.DEFAULTS = {
    time: 300000
};

export default ScreenSaver;