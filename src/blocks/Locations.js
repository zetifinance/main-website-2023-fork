import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'

export default function Locations({ data }) {
    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Slide List
    const grid = data?.list;

    return (
        <section className={clsx('block block__locations')}>
            <div className="container">
                <div className="locations__intro">
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

                <div className={clsx('locations__grid grid', 'grid--large-card')}>
                    { grid?.length > 0 &&
                        grid?.map((item, i) => {
                            const list_item_image = item?.list_item?.image;
                            const list_item_heading = item?.list_item?.heading;
                            const list_item_content = item?.list_item?.rich_editor;
                            const list_item_buttons = item?.list_item?.buttons;

                            return (
                                <div className="grid__item">
                                    <span>{(i+1) < 10 ? "0" + (i + 1) : (i + 1)}.</span>

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