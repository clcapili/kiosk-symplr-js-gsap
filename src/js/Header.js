import __ from "@foragefox/doubledash";

class Header {
    constructor(element) {
        this.element = element;

        this.body = document.body;
        this.headerBackdrop = this.body.querySelector('.header-backdrop');
		this.headerBtn = __.dom.findOne('.header-button', this.element);

        this.initEvents();
    }

    initEvents() {
        this.headerBtn.addEventListener('click', () => this.toggleHeaderMenu());
    }
    
    toggleHeaderMenu() {
        this.element.classList.toggle('header-open');
        this.headerBackdrop.classList.toggle('show');
    }

    hide() {
        this.element.classList.remove('header-open');
        this.headerBackdrop.classList.remove('show');
    }
}

export default Header;