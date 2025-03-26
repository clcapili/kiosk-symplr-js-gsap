import { gsap } from "gsap";
import __ from "@foragefox/doubledash";

const productAnimation = gsap.timeline({repeat: -1, paused: true})
productAnimation.set("[data-name='supply-chain-product-bubble-3'] .shape-sphere-black-bg", { opacity: 1 })
productAnimation.to("[data-name='supply-chain-product-bubble-3'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='supply-chain-product-bubble-1'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )
productAnimation.to("[data-name='supply-chain-product-bubble-1'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='supply-chain-product-bubble-2'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )
productAnimation.to("[data-name='supply-chain-product-bubble-2'] .shape-sphere-black-bg", { opacity: 0, duration: 1 })

productAnimation.to("[data-name='supply-chain-product-bubble-3'] .shape-sphere-black-bg", { opacity: 1, duration: 2.5 }, "<" )


const productDiagramValueAnalysis = __.dom.findOne('.element[data-name="supply-chain-product-diagram-hex-value-analysis"] .shape-hexagon-dark')
const productDiagramAccess = __.dom.findOne('.element[data-name="supply-chain-product-diagram-hex-access"] .shape-hexagon-dark')
const productDiagramContract = __.dom.findOne('.element[data-name="supply-chain-product-diagram-hex-contract"] .shape-hexagon-dark')

export default [
    {
        label: "supply-chain-0",
        elements: [
            {
                selector: ".navigation-bar-buttons .btn-prev",
                to: { opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-background-1']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-navigation']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-persona']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-persona-line']",
                to: {display: 'block', opacity: 1, duration: 1.5, width: '318px' }
            }
        ]
    },
    {
        label: "supply-chain-1",
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
                selector: "[data-name='supply-chain-persona']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-background-1']",
                to: { display: 'block', opacity: 0, duration: .25 }
            },
            {
                selector: "[data-name='supply-chain-background-3']",
                to: { display: 'block', opacity: 1 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-background-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-profile']",
                to: { display: 'block', opacity: 1, duration: .25 }
            },
            {
                selector: "[data-name='supply-chain-copy-1']",
                to: { display: 'block', opacity: 1, duration: .25 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-bubble-1']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-bubble-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-bubble-3']",
                to: { display: 'block',  opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-tooltip-1']",
                to: { display: 'block', opacity: 1, duration: .25 }
            },
            {
                selector: "[data-name='supply-chain-tooltip-2']",
                to: { display: 'block', opacity: 1, duration: .25 }
            },
        ]
    },
    {
        label: "supply-chain-2a",
        onEnter: (next, past) => {
            productDiagramValueAnalysis.classList.remove('active')
            productDiagramAccess.classList.remove('active')
            productDiagramContract.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='supply-chain-background-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-copy-1']",
                to: { display: 'none', opacity: 0 },
            },
            {
                selector: "[data-name='supply-chain-product-bubble-1']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-product-bubble-2']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-product-bubble-3']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-tooltip-1']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-tooltip-2']",
                to: { display: 'none', opacity: 0 },
                position: '<',
            },
            {
                selector: "[data-name='supply-chain-background-2']",
                to: { display: 'block', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-background-3']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-copy-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram']",
                to: { display: 'block', opacity: 1},
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-contract']",
                to: { display: 'block', opacity: 1 },
                 position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-1']",
                to: { display: 'block', opacity: 1 },
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-request']",
                to: { display: 'block', opacity: 1 }
            },
        ]
    },
    {
        label: "supply-chain-2b",
        onEnter: (next, past) => {
            productDiagramValueAnalysis.classList.add('active')
            productDiagramAccess.classList.remove('active')
            productDiagramContract.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-request']",
                to: { top: '26%', left: '-28%' },
            },
            {
                selector: "[data-name='supply-chain-product-diagram-1']",
                to: { top: '22%', scale: 1.3 },
                position: '<'
            },
        ]
    },
    {
        label: "supply-chain-2c",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramValueAnalysis.classList.add('active')
                productDiagramAccess.classList.remove('active')
                productDiagramContract.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            if (direction == 'backwards') {
                productDiagramValueAnalysis.classList.add('active')
                productDiagramAccess.classList.remove('active')
                productDiagramContract.classList.remove('active')
            }
        },
        elements: [
            {
                selector: "[data-name='supply-chain-product-diagram-1']",
                to: { top: '5%', left: '0', scale: 1 },
            },
            {
                selector: "[data-name='supply-chain-screenshot-1']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
    {
        label: "supply-chain-2d",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramValueAnalysis.classList.add('active')
                productDiagramAccess.classList.remove('active')
                productDiagramContract.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            productDiagramValueAnalysis.classList.remove('active')
            productDiagramAccess.classList.add('active')
            productDiagramContract.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-request']",
                to: { top: '26%', left: '10%' }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-line-1']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-request']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-line-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-screenshot-1']",
                to: { display: 'none', opacity: 0 },
            },
            {
                selector: "[data-name='supply-chain-screenshot-2']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
    {
        label: "supply-chain-2e",
        onEnter: (next, past) => {
            productDiagramValueAnalysis.classList.remove('active')
            productDiagramAccess.classList.remove('active')
            productDiagramContract.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='supply-chain-screenshot-2']",
                to: { display: 'none', opacity: 0 },
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-contract']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-copy-3']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-tooltip-3']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-outline']",
                to: { display: 'none', opacity: 0, rotate: '30deg' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-outline-gradient']",
                to: { display: 'block', opacity: 1, rotate: '30deg' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-value-analysis']",
                to: { top: '27%' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-access']",
                to: { top: '27%' },
                position: '<'
            }
        ]
    },
    {
        label: "supply-chain-3a",
        onEnter: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramValueAnalysis.classList.remove('active')
                productDiagramAccess.classList.add('active')
                productDiagramContract.classList.remove('active')
            }
        },
        onComplete: (next, past, direction) => {
            if (direction == 'backwards') {
                productDiagramValueAnalysis.classList.remove('active')
                productDiagramAccess.classList.add('active')
                productDiagramContract.classList.remove('active')
            }
        },
        elements: [
            {
                selector: "[data-name='supply-chain-copy-2']",
                to: { display: 'none', opacity: 0 },
            },
            {
                selector: "[data-name='supply-chain-copy-3']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-tooltip-3']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-copy-4']",
                to: { display: 'block', opacity: 1 },
            },
            {
                selector: "[data-name='supply-chain-copy-5']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-outline']",
                to: { display: 'block', opacity: 1, rotate: '0deg' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-outline-gradient']",
                to: { display: 'none', opacity: 0, rotate: '0deg' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-value-analysis']",
                to: { top: '15%' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-access']",
                to: { top: '15%' },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-contract']",
                to: { display: 'block', opacity: 1 },
            },
        ]
    },
    {
        label: "supply-chain-3b",
        onComplete: (next, past, direction) => {
            if (direction == 'forwards') {
                productDiagramValueAnalysis.classList.remove('active')
                productDiagramAccess.classList.remove('active')
                productDiagramContract.classList.add('active')
            }

            if (direction == 'backwards') {
                productDiagramValueAnalysis.classList.remove('active')
                productDiagramAccess.classList.remove('active')
                productDiagramContract.classList.add('active')
            }
        },
        elements: [
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-line-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-line-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-copy-5']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-checks']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-screenshot-3']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
    {
        label: "supply-chain-4",
        onEnter: (next, past) => {
            productDiagramValueAnalysis.classList.remove('active')
            productDiagramAccess.classList.remove('active')
            productDiagramContract.classList.remove('active')
        },
        elements: [
            {
                selector: "[data-name='supply-chain-copy-4']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-copy-5']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-checks']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-screenshot-3']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-copy-6']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-1']",
                to: { scale: .9 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-erp']",
                to: { display: 'block', opacity: 1, scale: 1.2 },
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-details']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-tooltip-4']",
                to: { display: 'block', opacity: 1 },
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-details']",
                to: { left: '49%', bottom: '41%' }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-details']",
                to: { left: '63%', bottom: '41%' }
            }
        ]
    },
    {
        label: "supply-chain-5",
        onEnter: (next, past) => {
            productDiagramValueAnalysis.classList.add('active')
            productDiagramAccess.classList.add('active')
            productDiagramContract.classList.add('active')
        },
        elements: [
            {
                selector: ".navigation-bar-buttons .btn-next",
                to: { opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-indicator-details']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-copy-6']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-hex-erp']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-tooltip-4']",
                to: { display: 'none', opacity: 0},
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-background-3']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='supply-chain-background-4']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-outline']",
                to: { display: 'none', opacity: 0 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-product-diagram-outline-gradient']",
                to: { display: 'block', opacity: 1 },
                position: '<'
            },
            {
                selector: "[data-name='supply-chain-copy-7']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='supply-chain-product-diagram-1']",
                to: { top: '5%', left: '-15%' },
            },
            {
                selector: "[data-name='supply-chain-outcomes']",
                to: { display: 'block', opacity: 1 },
            }
        ]
    },
]