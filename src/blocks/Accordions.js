import clsx from 'clsx';
import React, { useEffect } from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { initAccordions } from '../lib/main';
import { useInView } from "react-intersection-observer";

export default function Accordions({ data }) {
    // Functions
    useEffect(() => {
        initAccordions();
    }, []);

    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Accordions
    const accordions = data?.accordions;

    return (
        <section inview={inView} ref={ref} className={clsx('block block__accordions', {'in-view': inView})}>
            <div className="container">
                <div className="accordions__intro">
                    {intro_heading && (
                        <h2 className="section-heading">{intro_heading}</h2>
                    )}

                    {intro_content && (
                        <Text className={ clsx('') }>
                            {intro_content}
                        </Text>
                    )}

                    {intro_buttons && (
						<Buttons buttons={intro_buttons} className={clsx('')} />
                    )}
                </div>

                <div className={clsx('accordions__list accordions')}>
                    {accordions?.length > 0 &&
                        accordions?.map((item, i) => {
                            const accordion_heading = item?.heading;
                            const accordion_content = item?.rich_editor;
                            const accordion_buttons = item?.buttons;

                            return (
                                <React.Fragment key={i}>
                                {accordion_heading && (
                                    <div className="accordions__item">
                                        <button>
                                            <h3>{accordion_heading}</h3>
                                            <span></span>
                                        </button>

                                        <div className="accordions__item-inner">
                                            {accordion_content && (
                                                <Text className={clsx('')}>
                                                    {accordion_content}
                                                </Text>
                                            )}
                                            {accordion_buttons && (
                                                <Buttons buttons={accordion_buttons} className={clsx('')} />
                                            )}
                                        </div>
                                    </div>
                                )}
                                </React.Fragment>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}