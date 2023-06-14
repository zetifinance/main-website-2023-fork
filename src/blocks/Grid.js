import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import Image from '../resolvers/Image';
import { useInView } from "react-intersection-observer";

export default function Grid({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Variant
    const isCard = data?.variant === 'card';
    const isLargeCard = data?.variant === 'large-card';
    const isNoCard = data?.variant === 'no-card';

    // Variant
    const columns = data?.columns;

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Slide List
    const grid = data?.list;

    return (
        <section inview={inView} className={clsx('block block__grid', {'block__grid--card': isCard}, {'block__grid--large-card': isLargeCard}, {'block__grid--no-card': isNoCard}, {'in-view': inView})}>
            <div className="container">
                <div className="grid__intro">
                    {intro_heading && (
                        <h2 className={clsx('section-heading', {'section-heading--': isNoCard})}>{intro_heading}</h2>
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

                <div className={clsx('grid__grid grid', 'grid--col-'+columns, {'grid--card': isCard}, {'grid--large-card': isLargeCard}, {'grid--no-card': isNoCard})}>
                    { grid?.length > 0 &&
                        grid?.map((item, i) => {
                            const list_item_image = item?.list_item?.image;
                            const list_item_heading = item?.list_item?.heading;
                            const list_item_content = item?.list_item?.rich_editor;
                            const list_item_buttons = item?.list_item?.buttons;

                            return (
                                <div className="grid__item" key={i}>
                                    {isNoCard ? (
                                        <span>{(i+1) < 10 ? "0" + (i + 1) : (i + 1)}.</span>
                                    ) : null}

                                    { list_item_image && (
                                        <div className="grid__item-image">
                                            <Image src={ list_item_image } alt={""} className=""/>
                                        </div>
                                    )}
                                    <div className="grid__item-content">

                                        { list_item_heading && (
                                            <h3>{ list_item_heading }</h3>
                                        )}

                                        { list_item_content && (
                                            <Text className={clsx('')}>
                                                { list_item_content }
                                            </Text>
                                        )}

                                        { list_item_buttons && (
                                            <Buttons buttons={ list_item_buttons } className={ clsx('') } />
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}