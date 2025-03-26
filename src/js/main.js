import __ from "@foragefox/doubledash";
import Kiosk from "./Kiosk";
import { welcome, platform, supplyChain, onBoarding }  from './data/'
import { TransitionPattern, TransitionVideo, TransitionLottie } from "./transitions";

new Kiosk({
    transitions: [
        { 
            name: 'welcome',
            type: TransitionLottie, 
            options: { location: {x: 1900, y: 0}, color: '#FFFFFF' } 
        },
        { 
            name: 'platform',
            type: TransitionVideo, 
            options: { source: null }
        },
        { 
            name: 'supply-chain',
            type: TransitionLottie, 
            options: { location: {x: 0, y: 400}, color: '#6100D7' }
        },
        { 
            name: 'on-boarding',
            type: TransitionLottie, 
            options: { location: {x: 1900, y: 1000}, color: '#FAE864' }
        }
    ], 
    sections: [
        {
            type: 'general',
            selector: '.section-welcome',
            transition: 'welcome',
            startScene: 'welcome-splash',
            data: welcome
        },
        {
            type: 'general',
            selector: '.section-platform',
            transition: 'platform',
            startScene: 'platform',
            data: platform
        },
        {
            type: 'timeline',
            selector: '.section-supply-chain',
            transition: 'supply-chain',
            startScene: 'supply-chain-0',
            data: supplyChain
        },
        {
            type: 'timeline',
            selector: '.section-on-boarding',
            transition: 'on-boarding',
            startScene: 'on-boarding-0',
            data: onBoarding
        }
    ]
});
