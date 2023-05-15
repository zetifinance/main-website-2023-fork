import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

export default function Slider({ data }) {
    // variant
    const isStandard = data?.variant === 'default';
    const isVertical = data?.variant === 'vertical';
    
    // intro
    const intro = data?.intro;
    const intro_heading = intro?.heading;
    const intro_content = intro?.rich_editor;
    const intro_buttons = intro?.buttons;

    // slider
    const slider = data?.slider;

    return (
        <section className={clsx('block block__slider', {'block__slider--standard': isStandard}, {'block__slider--vertical': isVertical})}>
            <div className="container">
                <div className="slider__intro">
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
            </div>

            {isStandard ? (
                <div className="slider__slider">
                    <Splide options={ { width: '100%', rewind: false, gap: '40px' } }>
                        { slider?.length > 0 && 
                            slider?.map((item, i) => {
                                const slide_image = item?.slide?.main?.image;
                                const slide_heading = item?.slide?.main?.heading;
                                const slide_content = item?.slide?.main?.rich_editor;
                                const slide_buttons = item?.slide?.main?.buttons;

                                return (
                                    <SplideSlide>
                                        <div className="container">
                                            <Image src={ slide_image } alt={""} className=""/>
                                            <div className="splide__slide-content">
                                                { slide_heading && (
                                                    <h3>{ slide_heading }</h3>
                                                )}

                                                { slide_content && (
                                                    <Text className={clsx('')}>
                                                        { slide_content }
                                                    </Text>
                                                )}

                                                { slide_buttons && (
                                                    <Buttons buttons={ slide_buttons } className={ clsx('') } />
                                                )}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                );
                            })
                        }
                    </Splide>
                </div>
            ) : (
                <div className="container">
                    <div className="slider__slider">
                        <Splide options={ { width:'100%', type:'fade', rewind:true, gap:'40px', arrows:'false', paginationDirection:'ttb' } }>
                            { slider?.length > 0 && 
                                slider?.map((item, i) => {
                                    // Slide Content
                                    const slide_image = item?.slide?.image;
                                    const slide_heading = item?.slide?.main?.heading;
                                    const slide_content = item?.slide?.main?.rich_editor;
                                    const slide_buttons = item?.slide?.main?.buttons;

                                    // Slide List
                                    const slide_list = item?.slide?.list;

                                    return (
                                        <SplideSlide>
                                            <div className="splide__slide-content">
                                                { slide_heading && (
                                                    <h3>{ slide_heading }</h3>
                                                )}

                                                { slide_content && (
                                                    <Text className={clsx('')}>
                                                        { slide_content }
                                                    </Text>
                                                )}

                                                { slide_buttons && (
                                                    <Buttons buttons={ slide_buttons } className={ clsx('') } />
                                                )}
                                                { slide_image && (
                                                    <Image src={ slide_image } alt={""} className=""/>
                                                )}
                                            </div>
                                            <ul className="splide__splide-list list">
                                                { slide_list?.length > 0 &&
                                                    slide_list?.map((item, i) => {
                                                        // List Content
                                                        const list_item_variant = item?.variant;
                                                        const list_item_heading = item?.list_item?.heading;
                                                        const list_item_content = item?.list_item?.rich_editor;
                                                        const list_item_buttons = item?.list_item?.buttons;
                                                        const list_item_image = item?.list_item?.image;

                                                        return (
                                                            <li className="list__item">
                                                                { list_item_image && (
                                                                    <div className="list__item-image">
                                                                        <Image src={ list_item_image } alt={""} className=""/>
                                                                    </div>
                                                                )}
                                                                <div className="list__item-content">
                                                                    { list_item_heading && (
                                                                        <h4>{ list_item_heading }</h4>
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
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </SplideSlide>
                                    );
                                })
                            }
                        </Splide>
                    </div>
                </div>
            )}
        </section>
    )
}