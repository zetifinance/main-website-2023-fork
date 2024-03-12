import clsx from 'clsx';
import React, { useEffect } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import Image from '../resolvers/Image';
import { initTabs } from '../lib/main';
import { useInView } from "react-intersection-observer";

export default function Tabs({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Functions
    useEffect(() => {
        initTabs();
    }, []);

    // intro
    const intro = data?.intro;
    const intro_heading = intro?.heading;
    const intro_content = intro?.rich_editor;
    const intro_buttons = intro?.buttons;

    const variant = data?.variant
    const numberOfColumnsClass = variant === "default" ? "" : " " + variant

    // tabs
    const tabs = data?.tabs;
    const formatSelector = (selectorString) => {
        return selectorString.replace(/\s+/g, '-').toLowerCase().replace("&","and");
    }

    return (
        <section inview={inView} ref={ref} className={clsx('block block__tabs', {'in-view': inView})}>
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

                <div className={`tabs__selectors${numberOfColumnsClass}`}>
                    {tabs?.length > 0 &&
                        tabs?.map((item, i) => {
                            const tab = item?.tab;
                            const tab_selector = tab?.heading;
                            const tab_selector_formatted = formatSelector(tab_selector);
                            const isFirst = i === 0 ? 'active' : '';

                            return (
                                <button data-tab={tab_selector_formatted} className={clsx('tabs__selectors-button', isFirst)} key={i}>{tab_selector}</button>
                            );
                        })
                    }
                </div>
            </div>
            
            <div className="tabs__tabs">
                {tabs?.length > 0 &&
                    tabs?.map((item, i) => {
                        // Tab core
                        const tab = item?.tab;
                        const tab_selector = tab?.heading;
                        const tab_selector_formatted = formatSelector(tab_selector)

                        // Tab content
                        const tab_image = tab?.image;
                        const tab_heading = tab?.main?.heading;
                        const tab_content = tab?.main?.rich_editor;
                        const tab_buttons = tab?.main?.buttons;

                        // Conditional
                        const isFirst = i === 0 ? 'active' : '';

                        return (
                            <div className={clsx('tabs__tabs-tab', `tabs__tabs-tab--${tab_selector_formatted}`, isFirst) } key={i}>
                                <div className="tab__image">
                                    {tab_image && (    
                                        <Image src={tab_image} alt={""} className="" />
                                    )}
                                </div>
                                <div className="tab__content">
                                    {tab_heading && (
                                        <h3>{tab_heading}</h3>
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