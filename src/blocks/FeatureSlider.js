import clsx from 'clsx'
import React, { useEffect } from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import { initFeatures } from '../lib/main'

export default function FeatureSlider({ data }) {
    useEffect(() => {
        initFeatures();
    }, []);

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Features
    const features = data?.features;
    return (
        <section className="block block__feature-slider">
            <div className="container">
                <div className="feature-slider__intro">
                    {intro_heading && (
                        <h2 className="section-heading">{intro_heading}</h2>
                    )}

                    { intro_content && (
                        <Text className={ clsx('') }>
                            { intro_content }
                        </Text>
                    )}

                    {intro_buttons && (
						<Buttons buttons={intro_buttons} className={ clsx('') } />
                    )}
                </div>

                <div className={clsx('feature-slider__main')}>
                    <div className="feature-slider__main-selectors">
                        { features?.length > 0 &&
                            features?.map((item, i) => {
                                const isFirst = i === 0 ? 'active' : '';
                                const feature_heading = item?.heading;
                                const feature_content = item?.rich_editor;
                                const feature_buttons = item?.buttons;

                                return (
                                    <button data-feature={i} className={clsx('feature-slider__feature-content', isFirst)}>
                                        {feature_heading && (
                                            <h3>{feature_heading}</h3>
                                        )}

                                        { feature_content && (
                                            <Text className={ clsx('') }>
                                                { feature_content }
                                            </Text>
                                        )}

                                        {feature_buttons && (
                                            <Buttons buttons={feature_buttons} className={ clsx('') } />
                                        )}
                                    </button>
                                );
                            })
                        }
                    </div>
                    
                    <div className="feature-slider__main-images">
                        { features?.length > 0 &&
                            features?.map((item, i) => {
                                const isFirst = i === 0 ? 'active' : '';
                                const feature_image = item?.image;

                                return (
                                    <div className={clsx('feature-slider__feature-image', `feature-slider__feature-image--${i}`, isFirst)}>
                                        {feature_image && (    
                                            <Image src={feature_image} alt={""} className="" />
                                        )}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
