import { gsap } from "gsap";
import __ from "@foragefox/doubledash";

const productAnimation = gsap.timeline({repeat: -1, paused: true})

productAnimation.set("[data-name='on-boarding-product-bubble-5'] .shape-sphere-black-bg", { opacity: 1 })
productAnimation.to("[data-name='on-boarding-product-bubble-5'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })
productAnimation.to("[data-name='on-boarding-product-bubble-1'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )
productAnimation.to("[data-name='on-boarding-product-bubble-1'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='on-boarding-product-bubble-2'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )
productAnimation.to("[data-name='on-boarding-product-bubble-2'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='on-boarding-product-bubble-3'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )
productAnimation.to("[data-name='on-boarding-product-bubble-3'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='on-boarding-product-bubble-4'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )
productAnimation.to("[data-name='on-boarding-product-bubble-4'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='on-boarding-product-bubble-5'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )


const productDiagramRecruiting = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-recruiting"] .shape-hexagon-dark')
const productDiagramProvider = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-provider"] .shape-hexagon-dark')
const productDiagramProvider6 = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-provider-6"] .shape-hexagon-dark')
const productDiagramDirectory = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-directory"] .shape-hexagon-dark')
const productDiagramDirectory6 = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-directory-6"] .shape-hexagon-dark')
const productDiagramPhysicianScheduling = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-physician-scheduling"] .shape-hexagon-dark')
const productDiagramPhysicianScheduling6 = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-physician-scheduling-6"] .shape-hexagon-dark')
const productDiagramContract = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-contract"] .shape-hexagon-dark')
const productDiagramMidasStatit = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-midas-statit"] .shape-hexagon-dark')
const productDiagramCompliance = __.dom.findOne('.element[data-name="on-boarding-product-diagram-hex-compliance"] .shape-hexagon-dark')

export default [
    {
        label: "on-boarding-0",
        elements: [
            {
                selector: ".navigation-bar-buttons .btn-prev",
                to: { opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-background-1']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-navigation']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-persona']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-persona-line']",
                to: { display: 'block', opacity: 1, duration: 1.5, width: '248px' }
            }
        ]
    },
    {
        label: "on-boarding-1",
        onEnter: (next, past) => {
            productAnimation.play();
        },
        onLeave: (next, past) => {
            productAnimation.pause();
        },
        elements: [
            {
                selector: ".navigation-bar-buttons .btn-prev",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-persona']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-background-1']",
                to: { display: 'block', opacity: 0, duration: .25 }
            },
            {
                selector: "[data-name='on-boarding-background-3']",
                to: { display: 'block', opacity: 1 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-background-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-profile']",
                to: { display: 'block', opacity: 1, duration: .25 }
            },
            {
                selector: "[data-name='on-boarding-copy-1']",
                to: { display: 'block', opacity: 1, duration: .25 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-bubble-1']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-bubble-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-bubble-3']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-bubble-4']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-bubble-5']",
                to: {  display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-tooltip-1']",
                to: { display: 'block', opacity: 1, duration: .25 }
            },
            {
                selector: "[data-name='on-boarding-tooltip-2']",
                to: { display: 'block', opacity: 1, duration: .25 }
            }
        ]
    },
    {
        label: "on-boarding-2a",
        onEnter: (next, past) => {
            productDiagramRecruiting.classList.remove('active')
            productDiagramProvider.classList.remove('active')
            productDiagramDirectory.classList.remove('active')
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-background-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-1']",
                to: { display: 'none', opacity: 0 },
            },
            {
                selector: "[data-name='on-boarding-product-bubble-1']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-product-bubble-2']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-product-bubble-3']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-product-bubble-4']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-product-bubble-5']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-tooltip-1']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-tooltip-2']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='on-boarding-background-2']",
                to: { display: 'block', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-background-3']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-copy-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-outline-1']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram']",
                to: { display: 'block', opacity: 1},
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-provider']",
                to: { display: 'block', opacity: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-physician-scheduling']",
                to: { display: 'block', opacity: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-directory']",
                to: { display: 'block', opacity: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-recruiting']",
                to: { display: 'block', opacity: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { display: 'block', opacity: 1 },
            },
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-information']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
        ]
    },
    {
        label: "on-boarding-2b",
        onEnter: (next, past) => {
            productDiagramRecruiting.classList.add('active')
            productDiagramProvider.classList.remove('active')
            productDiagramDirectory.classList.remove('active')
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-information']",
                to: { top: '-6%', left: '-3%' },
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '45%', scale: 1.2 },
                position: '<'
            }
        ]
    },
    {
        label: "on-boarding-2c",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramRecruiting.classList.add('active')
                productDiagramProvider.classList.remove('active')
                productDiagramDirectory.classList.remove('active')
                productDiagramPhysicianScheduling.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            if (direction == 'backwards') {
                productDiagramRecruiting.classList.add('active')
                productDiagramProvider.classList.remove('active')
                productDiagramDirectory.classList.remove('active')
                productDiagramPhysicianScheduling.classList.remove('active')
            }
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '15%', left: '-1%', scale: .9 },
            },
            {
                selector: "[data-name='on-boarding-screenshot-1']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
    {
        label: "on-boarding-3a",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramRecruiting.classList.add('active')
                productDiagramProvider.classList.remove('active')
                productDiagramDirectory.classList.remove('active')
                productDiagramPhysicianScheduling.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            productDiagramRecruiting.classList.remove('active')
            productDiagramProvider.classList.add('active')
            productDiagramDirectory.classList.remove('active')
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-information']",
                to: { top: '-6%', left: '37%' }
            },
            {
                selector: "[data-name='on-boarding-copy-2']",
                to: { display: 'none', opacity: 0 },
            },
            {
                selector: "[data-name='on-boarding-screenshot-1']",
                to: { display: 'none', opacity: 0 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-information']",
                to: { display: 'none', opacity: 0 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '20%', left: '30%', scale: 1.2 },
            },
            {
                selector: "[data-name='on-boarding-copy-3']",
                to: { display: 'block', opacity: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-1']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-1']",
                to: {  display: 'none', opacity: 0 }
            }
        ]
    },
    {
        label: "on-boarding-3b",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramRecruiting.classList.remove('active')
                productDiagramProvider.classList.add('active')
                productDiagramDirectory.classList.remove('active')
                productDiagramPhysicianScheduling.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            if (direction == 'backwards') {
                productDiagramRecruiting.classList.remove('active')
                productDiagramProvider.classList.add('active')
                productDiagramDirectory.classList.remove('active')
                productDiagramPhysicianScheduling.classList.remove('active')
            }
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '15%', left: '-1%', scale: .9 },
            },
            {
                selector: "[data-name='on-boarding-screenshot-2']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
    {
        label: "on-boarding-4a",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramRecruiting.classList.remove('active')
                productDiagramProvider.classList.add('active')
                productDiagramDirectory.classList.remove('active')
                productDiagramPhysicianScheduling.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            productDiagramRecruiting.classList.remove('active')
            productDiagramProvider.classList.remove('active')
            productDiagramDirectory.classList.add('active')
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-3']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-screenshot-2']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-copy-4']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '-10%', left: '30%', scale: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-2']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-2']",
                to: { 
                    display: 'none', 
                    opacity: 0,
                 }
            }
        ]
    },
    {
        label: "on-boarding-4b",
        onEnter: (next, past, direction) => {
            productDiagramRecruiting.classList.remove('active')
            productDiagramProvider.classList.remove('active')
            productDiagramDirectory.classList.add('active')
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        oncomplete: (next, past, direction) => {
            productDiagramDirectory.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '5%', left: '-1%', scale: .9 },
            },
            {
                selector: "[data-name='on-boarding-screenshot-3']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
    {
        label: "on-boarding-5a",
        onEnter: (next, past) => {
            productDiagramPhysicianScheduling.classList.add('active')
            productDiagramProvider.classList.remove('active')
            productDiagramRecruiting.classList.remove('active')
            productDiagramDirectory.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-4']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-screenshot-3']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-copy-5']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '-10%', left: '30%', scale: 1 },
                position: '<'
            }
        ]
    },
    {
        label: "on-boarding-5b",
        onEnter: (next, past) => {
            productDiagramPhysicianScheduling.classList.add('active')
            productDiagramProvider.classList.add('active')
            productDiagramRecruiting.classList.remove('active')
        },
        onLeave: (next, past) => {
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-3']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-5c",
        onEnter: (next, past) => {
            productDiagramPhysicianScheduling.classList.add('active')
            productDiagramProvider.classList.remove('active')
            productDiagramRecruiting.classList.remove('active')
        },
        onLeave: (next, past) => {
            productDiagramPhysicianScheduling.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-product-diagram-indicator-line-3']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '15%', left: '2%', scale: .9 }
            },
            {
                selector: "[data-name='on-boarding-screenshot-4']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-6a",
        onEnter: (next, past) => {
            productDiagramDirectory6.classList.add('active')
        },
        onLeave: (next, past) => {
            productDiagramDirectory6.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-5']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-screenshot-4']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-copy-6']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-recruiting']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-provider']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-directory']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-physician-scheduling']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-directory-6']",
                to: { bottom: '93%', left: '18%', scale: 0.65 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { top: '15%', left: '0%', scale: 1.1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-contract']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-compliance']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-midas-statit']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-directory-6']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-physician-scheduling-6']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-hex-provider-6']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-outline-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-outline-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-copy-6a']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-6b",
        onEnter: (next, past) => {
            productDiagramContract.classList.add('active')
        },
        onLeave: (next, past) => {
            productDiagramContract.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-6a']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6b']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-6c",
        onEnter: (next, past) => {
            productDiagramProvider6.classList.add('active')
        },
        onLeave: (next, past) => {
            productDiagramProvider6.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-6b']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6c']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-6d",
        onEnter: (next, past) => {
            productDiagramMidasStatit.classList.add('active')
        },
        onLeave: (next, past) => {
            productDiagramMidasStatit.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-6c']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6d']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-6e",
        onEnter: (next, past) => {
            productDiagramCompliance.classList.add('active')
        },
        onLeave: (next, past) => {
            productDiagramCompliance.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-6d']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6e']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-6f",
        onEnter: (next, past) => {
            productDiagramPhysicianScheduling6.classList.add('active')
        },
        onLeave: (next, past) => {
            productDiagramPhysicianScheduling6.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='on-boarding-copy-6e']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6f']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "on-boarding-7",
        elements: [
            {
                selector: ".navigation-bar-buttons .btn-next",
                to: { opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-copy-6f']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-product-diagram-1']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-copy-7']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='on-boarding-background-3']",
                to: { display: 'block', opacity: 0 }
            },
            {
                selector: "[data-name='on-boarding-background-4']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='on-boarding-outcomes']",
                to: { display: 'block', opacity: 1 },
            },
        ]
    },
    
]
