import clsx from 'clsx'
import React, { useEffect } from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import { initTabs } from '../lib/main'

export default function Tabs({ data }) {
    useEffect(() => {
        initTabs();
    }, []);

    // intro
    const intro = data.intro;
    const intro_heading = intro.heading;
    const intro_content = intro.rich_editor;
    const intro_buttons = intro.buttons;

    // tabs
    const tabs = data.tabs;

    return (
        <section className="block block__tabs">
            <div className="container">
                <div className="tabs__intro">
                    <div>
                        {intro_heading && (
                            <h2 className="section-heading">{intro_heading}</h2>
                        )}

                        { intro_content && (
                            <Text className={ clsx('') }>
                                { intro_content }
                            </Text>
                        )}
                    </div>

					{intro_buttons && (
						<Buttons buttons={intro_buttons} className={ clsx('') } />
                    )}
                </div>

                <div className="tabs__selectors">
                    {tabs.length > 0 &&
                        tabs.map((item, i) => {
                            const tab = item.tab;
                            const tab_selector = tab.heading
                            const tab_selector_formatted = tab_selector.replace(/\s+/g, '-').toLowerCase();
                            const isFirst = i === 0 ? 'active' : '';

                            return (
                                <button data-tab={tab_selector_formatted} className={clsx('tabs__selectors-button', isFirst)}>{tab_selector}</button>
                            );
                        })
                    }
                </div>
            </div>
            
            <div className="tabs__tabs">
                {tabs.length > 0 &&
                    tabs.map((item, i) => {
                        // Tab core
                        const tab = item.tab;
                        const tab_selector = tab.heading
                        const tab_selector_formatted = tab_selector.replace(/\s+/g, '-').toLowerCase();

                        // Tab content
                        const tab_image = tab.image;
                        const tab_heading = tab.main.heading;
                        const tab_content = tab.main.rich_editor;
                        const tab_buttons = tab.main.buttons;

                        // Conditional
                        const isFirst = i === 0 ? 'active' : '';

                        return (
                            <div className={clsx('tabs__tabs-tab', `tabs__tabs-tab--${tab_selector_formatted}`, isFirst) }>
                                <div className="tab__image">
                                    {tab_image && (    
                                        <Image src={tab_image} alt={""} className="" />
                                    )}
                                </div>
                                <div className="tab__content">
                                    {tab_heading && (
                                        <h3 className="section-heading">{tab_heading}</h3>
                                    )}

                                    { tab_content && (
                                        <Text className={ clsx('') }>
                                            { tab_content }
                                        </Text>
                                    )}

                                    {tab_buttons && (
                                        <Buttons buttons={tab_buttons} className={ clsx('') } />
                                    )}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}