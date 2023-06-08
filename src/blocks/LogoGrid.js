import clsx from 'clsx'
import React from 'react'
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import { useInView } from "react-intersection-observer";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function LogoGrid({ data }) {
    // Options
    const isSlider = data?.variant === "Slider";

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;
    
    // Logos
    const logos = data?.logos;

    // Functions
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    return (
        <section inView={inView} ref={ref} className={clsx('block block__logo-grid', {'in-view': inView})}>
            <div className="container">
                <div className="logo-grid__intro">
                    {intro_heading && (
                        <h2 className="section-heading">{ intro_heading }</h2>
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
                
                {
                    isSlider ? (
                        <div className="logo-grid__logos logo-grid__logos--slider">
                            <Splide options={ {
                                mediaQuery: 'min',
                                perPage: 4, 
                                perMove: 4, 
                                rewind: false, 
                                gap: '100px', 
                                arrows: false,
                            } }>
                            
                            {
                                logos?.map((item, i) => {
                                    const image_link = item?.link;
                                    const image_light = item?.image_light;
                                    const image_dark = item?.image_dark;

                                    return (
                                        <SplideSlide key={i}>
                                            {image_link ? (
                                                <a className="logos__logo" href={image_link} rel="noreferrer noopener" target="_blank">
                                                    {image_light && (
                                                        <div className={clsx('logos__logo-light')}>
                                                            <img src={image_light} alt="" className="logos__logo-light"></img>
                                                            <Image src={image_light} alt="" className=""/>
                                                        </div>
                                                    )}
                                                                                
                                                    {image_dark && (
                                                        <div className={clsx('logos__logo-dark', { 'primary': !image_light })}>
                                                            <Image src={image_dark} alt="" className=""/>
                                                        </div>
                                                    )}
                                                </a>
                                            ) : (
                                                <div className="logos__logo">
                                                    {image_light && (
                                                        <div className={clsx('logos__logo-light')}>
                                                            <Image src={image_light} alt="" className=""/>
                                                        </div>
                                                    )}
                                                                                
                                                    {image_dark && (
                                                        <div className={clsx('logos__logo-dark', { 'primary': !image_light })}>
                                                            <Image src={image_dark} alt="" className=""/>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </SplideSlide>
                                    );
                                })
                            }
                            </Splide>
                        </div>
                    ): (
                        <div className="logo-grid__logos">
                            {logos?.map((item, i) => {
                                const image_link = item?.link;
                                const image_light = item?.image_light;
                                const image_dark = item?.image_dark;

                                return (
                                    <>
                                        {image_link ? (
                                            <a className="logos__logo" href={image_link} rel="noreferrer noopener" target="_blank">
                                                {image_light && (
                                                    <div className={clsx('logos__logo-light')}>
                                                        <img src={image_light} alt="" className="logos__logo-light"></img>
                                                        <Image src={image_light} alt="" className=""/>
                                                    </div>
                                                )}
                                                                            
                                                {image_dark && (
                                                    <div className={clsx('logos__logo-dark', { 'primary': !image_light })}>
                                                        <Image src={image_dark} alt="" className=""/>
                                                    </div>
                                                )}
                                            </a>
                                        ) : (
                                            <div className="logos__logo">
                                                {image_light && (
                                                    <div className={clsx('logos__logo-light')}>
                                                        <Image src={image_light} alt="" className=""/>
                                                    </div>
                                                )}
                                                                            
                                                {image_dark && (
                                                    <div className={clsx('logos__logo-dark', { 'primary': !image_light })}>
                                                        <Image src={image_dark} alt="" className=""/>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    )
                }
            </div>
        </section>
    )
}