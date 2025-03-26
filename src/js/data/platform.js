import __ from "@foragefox/doubledash";

const productNavLink = __.dom.findOne('.navigation-bar .nav-link-product');
const solutionNavLink = __.dom.findOne('.navigation-bar .nav-link-solution');
const backNavLink = __.dom.findOne('.navigation-bar[data-name="platform-navigation-solution"] .btn-prev');

const onProductEnter = (next, past) => {
    productNavLink.classList.add('show');
    solutionNavLink.dataset.jump = past.label;
    backNavLink.dataset.jump = past.label;
};
const onProductLeave = (next, past) => {
    productNavLink.classList.remove('show');
    solutionNavLink.dataset.jump = null;
    backNavLink.dataset.jump = 'platform'
};

export default [
    {
        label: "platform",
        elements: [
            {
                selector: "[data-name='platform-background']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-background-1']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-background-2']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: 0, y: 0, scale: 0.9, opacity: 1 }
            },
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'block', opacity: 1 }
            },
            // supply-chain
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-card']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-access']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-contract-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-spend-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-line']",
                to: { display: 'none', opacity: 0 }
            },
            // supply-chain end

            // on-boarding
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-card']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-provider-data-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-talent']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-communication-physician-scheduling']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-highlight-network-provider-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-line']",
                to: { display: 'none', opacity: 0 }
            },
            // on-boarding end

            // technology-ai
            {
                selector: "[data-name='platform-technology-ai-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-ai-tag']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-ai-line']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-ai-copy']",
                to: { display: 'none', opacity: 0 }
            },
            // technology-ai end

            // technology-analytics
            {
                selector: "[data-name='platform-technology-analytics-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-analytics-tag']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-analytics-line']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-analytics-copy']",
                to: { display: 'none', opacity: 0 }
            },
            // technology-analytics end

            // technology-api
            {
                selector: "[data-name='platform-technology-api-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-api-tag']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-api-line']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-api-copy']",
                to: { display: 'none', opacity: 0 }
            },
            // technology-api end

            // technology-cloud
            {
                selector: "[data-name='platform-technology-cloud-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-cloud-tag']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-cloud-line']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-cloud-copy']",
                to: { display: 'none', opacity: 0 }
            },
            // technology-cloud end

            // technology-security
            {
                selector: "[data-name='platform-technology-security-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-security-tag']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-security-line']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-security-copy']",
                to: { display: 'none', opacity: 0 }
            },
            // technology-security

            // technology-services
            {
                selector: "[data-name='platform-technology-services-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-services-tag']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-services-line']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-technology-services-copy']",
                to: { display: 'none', opacity: 0 }
            },
            // technology-services

            // navigation
            {
                selector: "[data-name='platform-navigation-user-story']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'none', opacity: 0 }
            },
            // navigation end

            // solution start
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-workforce']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-talent']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-compliance']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-provider-data-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-quality-safety']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-communication-physician-scheduling']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-spend-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-contract-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-access']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-solution-network-provider-management']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-border",
                set: { opacity: 1 }
            },
             // solution end

            // product start
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'none', opacity: 0 }
            },
            // product end
        ]
    },
    {
        label: "platform-story-supply-chain",
        elements: [  
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-background-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '15%', y: '-5%', scale: 1.2, opacity: 0.1 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-card']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-access']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-contract-management']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-spend-management']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-user-story']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "platform-story-on-boarding",
        elements: [   
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },   
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-background-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-17%', y: '-3%', scale: 1.1, opacity: 0.1 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-card']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-provider-data-management']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-talent']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-communication-physician-scheduling']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-highlight-network-provider-management']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-user-story']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "platform-technology-ai",
        elements: [   
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-background-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-38%', y: '-35%', scale: 1.15, opacity: 0.3 }
            },
            {
                selector: "[data-name='platform-technology-ai-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-ai-tag']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-ai-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-ai-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "platform-technology-security",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-background-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '35%', y: '26%', scale: 1.15, opacity: 0.3 }
            },
            {
                selector: "[data-name='platform-technology-security-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-security-tag']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-security-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-security-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "platform-technology-api",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-background-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to:  { x: '-44.4%', y: '8%', scale: 1.15, opacity: 0.3 }
            },
            {
                selector: "[data-name='platform-technology-api-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-api-tag']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-api-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-api-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'block', opacity: 1 }
            }

        ]
    },
    {
        label: "platform-technology-analytics",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-background-1']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-38%', y: '29.2%', scale: 1.15, opacity: 0.3 }
            },
            {
                selector: "[data-name='platform-technology-analytics-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-analytics-tag']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-analytics-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-analytics-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "platform-technology-cloud",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-background-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '36.1%', y: '-35.7%', scale: 1.15, opacity: 0.3 }
            },
            {
                selector: "[data-name='platform-technology-cloud-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-cloud-tag']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-cloud-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-cloud-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    {
        label: "platform-technology-services",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-background-2']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-diagram']",
                to:  { x: '36.2%', y: '0.7%', scale: 1.15, opacity: 0.3 }
            },
            {
                selector: "[data-name='platform-technology-services-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-services-tag']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-services-line']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-technology-services-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-technology']",
                to: { display: 'block', opacity: 1 }
            }
        ]
    },
    // solution
    {
        label: "platform-solution-workforce",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '24%', y: '68%', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-workforce']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-workforce']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            }, 
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-talent",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-20%', y: '68%', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-talent']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-contingent-talent-management']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-recruiting']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-talent-sourcing']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-learning']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-performance']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-assessment']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-hiring']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-courseware']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-compliance",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-64.5%', y: '68%', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-compliance']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-compliance']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-provider-data-management",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '46%', y: '0', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-provider-data-management']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-provider']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-directory']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-cvo']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-quality-safety",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '2%', y: '0', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-quality-safety']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-care-management']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-midas-datavision']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-midas-statit']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-safety']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-quality-review']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-communication-physician-scheduling",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-42.3%', y: '0', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-communication-physician-scheduling']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-physician-scheduling']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-clinical-communications']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-spend-management",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-86.5%', y: '0', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-spend-management']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-value-analysis']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-spend-analysis']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-spend-management-evidence-analysis']",
                to: { scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-contract-management",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '23.9%', y: '-67.7%', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-contract-management']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-contract']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-access",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-20.2%', y: '-67.7%', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-access']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-access']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    {
        label: "platform-solution-network-provider-management",
        elements: [
            {
                selector: "[data-name='platform-diagram-copy']",
                to: { display: 'none', opacity: 0 }
            },
            {
                selector: "[data-name='platform-story-on-boarding-profile-sm']",
                to: { display: 'none', opacity: 0 }
            },  
            {
                selector: "[data-name='platform-story-supply-chain-profile-sm']",
                to: { display: 'none', opacity: 0 }
            }, 
            {
                selector: "[data-name='platform-diagram']",
                to: { x: '-64.4%', y: '-67.7%', scale: 5, opacity: 0.05 }
            },
            {
                selector: "[data-name='platform-solution-network-provider-management']",
                to: { display: 'block', opacity: 1, delay: 0.25 }
            },
            {
                selector: "[data-name='platform-solution-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-solution-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-navigation-solution']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-evidence-analysis']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-directory']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-payer']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-cvo']",
                to: {  scale: 1,  y: '0', x: '0' }
            },
            {
                selector: ".solution-product-hexagon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-icon",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: ".solution-product-title",
                set: { scale: 1, opacity: 1, x: '0%', y: '0%' }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'none', opacity: 0 }
            },
        ]
    },
    // solution end

    /* Products start */
    /*
    
    platform-product-workforce
    --
    platform-product-contingent-talent-management
    platform-product-recruiting
    platform-product-talent-sourcing
    platform-product-learning
    platform-product-performance
    platform-product-assessment
    platform-product-hiring
    platform-product-courseware
    --
    platform-product-compliance
    --
    platform-product-provider
    platform-product-provider-data-management-directory
    platform-product-provider-data-management-cvo
    --
    platform-product-midas-care-management
    platform-product-midas-datavision
    platform-product-midas-statit
    platform-product-safety
    platform-product-quality-review
    --
    platform-product-physician-scheduling
    platform-product-clinical-communications
    --
    platform-product-value-analysis
    platform-product-spend-analysis
    platform-product-spend-management-evidence-analysis
    --
    platform-product-contract
    --
    platform-product-access
    --
    platform-product-network-provider-management-evidence-analysis
    platform-product-network-provider-management-directory
    platform-product-network-provider-management-cvo

    */
    {
        label: "platform-product-workforce",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-workforce']  .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-75%' }
            },
            {
                selector: "[data-name='platform-product-workforce']  .solution-product-icon",
                to: { scale: 2.05, y: '-65%', x: '-55%' }
            },
            {
                selector: "[data-name='platform-product-workforce']  .solution-product-title",
                to: { scale: 1.75, y: '50%', x: '-40%' }
            },
        ]
    },
    {
        label: "platform-product-contingent-talent-management",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-contingent-talent-management']  .solution-product-hexagon",
                to: { scale: 2.5, y: '-12.5%', x: '33%' }
            },
            {
                selector: "[data-name='platform-product-contingent-talent-management']  .solution-product-icon",
                to: { scale: 2.05, y: '400%', x: '500%' }
            },
            {
                selector: "[data-name='platform-product-contingent-talent-management']  .solution-product-title",
                to: { scale: 1.75, y: '275%', x: '100%' }
            },
        ]
    },
    {
        label: "platform-product-recruiting",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-recruiting'] .solution-product-hexagon",
                to: { scale: 2.5, y: '12.5%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-recruiting']  .solution-product-icon",
                to: { scale: 2.05, y: '625%', x: '-45%' }
            },
            {
                selector: "[data-name='platform-product-recruiting']  .solution-product-title",
                to: { scale: 1.75, y: '500%', x: '-40%' }
            },
        ]
    },
    {
        label: "platform-product-talent-sourcing",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-talent-sourcing'] .solution-product-hexagon",
                to: { scale: 2.5, y: '12.5%', x: '-180%' }
            },
            {
                selector: "[data-name='platform-product-talent-sourcing']  .solution-product-icon",
                to: { scale: 2.05, y: '450%', x: '-600%' }
            },
            {
                selector: "[data-name='platform-product-talent-sourcing']  .solution-product-title",
                to: { scale: 1.75, y: '525%', x: '-195%' }
            },
        ]
    },
    {
        label: "platform-product-learning",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-learning'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '85%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-learning']  .solution-product-icon",
                to: { scale: 2.05, y: '-125%', x: '800%' }
            },
            {
                selector: "[data-name='platform-product-learning']  .solution-product-title",
                to: { scale: 1.75, y: '25%', x: '395%' }
            },
        ]
    },
    {
        label: "platform-product-performance",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-performance'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-20%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-performance']  .solution-product-icon",
                to: { scale: 2.05, y: '-75%', x: '215%' }
            },
            {
                selector: "[data-name='platform-product-performance']  .solution-product-title",
                to: { scale: 1.75, y: '45%', x: '62.5%' }
            },
        ]
    },
    {
        label: "platform-product-assessment",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-assessment'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-125%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-assessment']  .solution-product-icon",
                to: { scale: 2.05, y: '-90%', x: '-300%' }
            },
            {
                selector: "[data-name='platform-product-assessment']  .solution-product-title",
                to: { scale: 1.75, y: '45%', x: '-133%' }
            },
        ]
    },
    {
        label: "platform-product-hiring",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-hiring'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-235%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-hiring']  .solution-product-icon",
                to: { scale: 2.05, y: '-75%', x: '-875%' }
            },
            {
                selector: "[data-name='platform-product-hiring']  .solution-product-title",
                to: { scale: 1.75, y: '45%', x: '-575%' }
            },
        ]
    },
    {
        label: "platform-product-courseware",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-courseware'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-150%', x: '35%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-courseware']  .solution-product-icon",
                to: { scale: 2.05, y: '-600%', x: '525%' }
            },
            {
                selector: "[data-name='platform-product-courseware']  .solution-product-title",
                to: { scale: 1.75, y: '-1075%', x: '175%' }
            },
        ]
    },
    {
        label: "platform-product-compliance",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-compliance'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-compliance']  .solution-product-icon",
                to: { scale: 2.05, y: '-75%', x: '-50%' }
            },
            {
                selector: "[data-name='platform-product-compliance']  .solution-product-title",
                to: { scale: 1.75, y: '60%', x: '-40%' }
            },
        ]
    },
    {
        label: "platform-product-provider",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '35%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider']  .solution-product-icon",
                to: { scale: 2.05, y: '-60%', x: '525%' }
            },
            {
                selector: "[data-name='platform-product-provider']  .solution-product-title",
                to: { scale: 1.75, y: '150%', x: '125%' }
            },
        ]
    },
    {
        label: "platform-product-provider-data-management-directory",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-directory'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-directory']  .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-60%' }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-directory']  .solution-product-title",
                to: { scale: 1.75, y: '100%', x: '-35%' }
            },
        ]
    },
    {
        label: "platform-product-provider-data-management-cvo",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-cvo']  .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-180%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-cvo']  .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-610%' }
            },
            {
                selector: "[data-name='platform-product-provider-data-management-cvo']  .solution-product-title",
                to: { scale: 1.75, y: '100%', x: '-395%' }
            },
        ]
    },
    {
        label: "platform-product-midas-care-management",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-care-management'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-25%', x: '35%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-care-management']  .solution-product-icon",
                to: { scale: 2.05, y: '175%', x: '525%' }
            },
            {
                selector: "[data-name='platform-product-midas-care-management']  .solution-product-title",
                to: { scale: 1.75, y: '300%', x: '160%' }
            },
        ]
    },
    {
        label: "platform-product-midas-datavision",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-datavision'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-25%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-datavision'] .solution-product-icon",
                to: { scale: 2.05, y: '225%', x: '-50%' }
            },
            {
                selector: "[data-name='platform-product-midas-datavision'] .solution-product-title",
                to: { scale: 1.75, y: '350%', x: '-40%' }
            },
        ]
    },
    {
        label: "platform-product-midas-statit",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-statit'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-25%', x: '-175%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-midas-statit'] .solution-product-icon",
                to: { scale: 2.05, y: '250%', x: '-575%' }
            },
            {
                selector: "[data-name='platform-product-midas-statit'] .solution-product-title",
                to: { scale: 1.75, y: '1050%', x: '-225%' }
            },
        ]
    },
    {
        label: "platform-product-safety",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-safety'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-125%', x: '-20%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-safety']  .solution-product-icon",
                to: { scale: 2.05, y: '-400%', x: '225%' }
            },
            {
                selector: "[data-name='platform-product-safety']  .solution-product-title",
                to: { scale: 1.75, y: '-450%', x: '55%' }
            },
        ]
    },
    {
        label: "platform-product-quality-review",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-quality-review'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-125%', x: '-125%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-quality-review']  .solution-product-icon",
                to: { scale: 2.05, y: '-375%', x: '-325%' }
            },
            {
                selector: "[data-name='platform-product-quality-review']  .solution-product-title",
                to: { scale: 1.75, y: '-450%', x: '-112.5%' }
            },
        ]
    },
    {
        label: "platform-product-physician-scheduling",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-physician-scheduling'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-15%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-physician-scheduling'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '300%' }
            },
            {
                selector: "[data-name='platform-product-physician-scheduling'] .solution-product-title",
                to: { scale: 1.75, y: '60%', x: '82.5%' }
            },
        ]
    },
    {
        label: "platform-product-clinical-communications",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-clinical-communications'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-125%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-clinical-communications']  .solution-product-icon",
                to: { scale: 2.05, y: '-75%', x: '-320%' }
            },
            {
                selector: "[data-name='platform-product-clinical-communications']  .solution-product-title",
                to: { scale: 1.75, y: '100%', x: '-105%' }
            },
        ]
    },
    {
        label: "platform-product-value-analysis",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-value-analysis'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '35%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-value-analysis'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '520%' }
            },
            {
                selector: "[data-name='platform-product-value-analysis'] .solution-product-title",
                to: { scale: 1.75, y: '100%', x: '145%' }
            },
        ]
    },
    {
        label: "platform-product-spend-analysis",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-spend-analysis'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-spend-analysis']  .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-55%' }
            },
            {
                selector: "[data-name='platform-product-spend-analysis']  .solution-product-title",
                to: { scale: 1.75, y: '100%', x: '-35%' }
            },
        ]
    },
    {
        label: "platform-product-spend-management-evidence-analysis",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-spend-management-evidence-analysis'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-180%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-spend-management-evidence-analysis'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-600%' }
            },
            {
                selector: "[data-name='platform-product-spend-management-evidence-analysis'] .solution-product-title",
                to: { scale: 1.75, y: '60%', x: '-305%' }
            },
        ]
    },
    {
        label: "platform-product-contract",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-contract'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-contract'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-50%' }
            },
            {
                selector: "[data-name='platform-product-contract'] .solution-product-title",
                to: { scale: 1.75, y: '95%', x: '-35%' }
            },
        ]
    },
    {
        label: "platform-product-access",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-access'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-75%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-access'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-50%' }
            },
            {
                selector: "[data-name='platform-product-access'] .solution-product-title",
                to: { scale: 1.75, y: '95%', x: '-35%' }
            },
        ]
    },
    {
        label: "platform-product-network-provider-management-evidence-analysis",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-evidence-analysis'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '90%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-evidence-analysis'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '800%' }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-evidence-analysis'] .solution-product-title",
                to: { scale: 1.75, y: '60%', x: '385%' }
            },
        ]
    },
    {
        label: "platform-product-payer",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-payer'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-15%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-payer'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '275%' }
            },
            {
                selector: "[data-name='platform-product-payer'] .solution-product-title",
                to: { scale: 1.75, y: '100%', x: '175%' }
            },
        ]
    },
    {
        label: "platform-product-network-provider-management-directory",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-directory'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-125%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-directory'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-325%' }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-directory'] .solution-product-title",
                to: { scale: 1.75, y: '80%', x: '-155%' }
            },
        ]
    },
    {
        label: "platform-product-network-provider-management-cvo",
        onEnter: onProductEnter,
        onLeave: onProductLeave,
        elements: [
            {
                selector: "[data-name='platform-diagram']",
                to: { opacity: 0 }
            },
            {
                selector: ".solution-border",
                to: { opacity: 0.03 }
            },
            {
                selector: "[data-name='platform-product-copy']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-title']",
                to: { display: 'block', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-cvo'] .solution-product-hexagon",
                to: { scale: 2.5, y: '-75%', x: '-225%', opacity: 1 }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-cvo'] .solution-product-icon",
                to: { scale: 2.05, y: '-50%', x: '-840%' }
            },
            {
                selector: "[data-name='platform-product-network-provider-management-cvo'] .solution-product-title",
                to: { scale: 1.75, y: '80%', x: '-545%' }
            },
        ]
    },
    
]
