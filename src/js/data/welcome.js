import __ from "@foragefox/doubledash";

let video = __.dom.findOne('.section-welcome .welcome-video');

export default [
    {
        label: "welcome-splash",
        onEnter: (next, past) => {
            video.play();
        },
        onLeave: (next, past) => {
            video.pause();
            video.currentTime = 0;
        },
        elements: [
            {
                selector: "[data-name='welcome-splash']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    }
]