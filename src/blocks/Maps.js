import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from "react-intersection-observer";

export default function Maps({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Intro
    const intro_heading = data ?.intro ?.heading;
    const intro_content = data ?.intro ?.rich_editor;
    const intro_buttons = data ?.intro ?.buttons;

    // Slide List
    const maps = data ?.maps_grid;

    return (
        <section inview={inView} className={clsx('block block__maps', { 'in-view': inView })}>
            <div className="container">
                <div className="maps__intro">
                    {intro_heading && (
                        <h2 className="section-heading">{intro_heading}</h2>
                    )}

                    {intro_content && (
                        <Text className={clsx('')}>
                            {intro_content}
                        </Text>
                    )}

                    {intro_buttons && (
                        <Buttons buttons={intro_buttons} className={clsx('')} />
                    )}
                </div>

                <div className={clsx('maps__grid')}>
                    <div className="maps__map">
                        <h3>UK</h3>
                    </div>
                    <div className="maps__map">
                        <h3>USA</h3>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}