import __ from "@foragefox/doubledash";

class Restarter {
	
    constructor(options) {
        this.options = __.lang.extend(true, Restarter.DEFAULTS, typeof options == 'object' && options);

        this.timeout = null;

        this.initEvents();
        this.resetTimer();
	}

    initEvents() {
        __.event.on(document.body, 'click', () => this.resetTimer());
    }

    resetTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => { this.options.onTrigger() }, this.options.time);
    }

}

Restarter.DEFAULTS = {
    time: 300000,
    onTrigger: () => {}
};

export default Restarter;