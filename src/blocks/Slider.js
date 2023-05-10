import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

export default function Slider({ data }) {
    return (
        <section className="block block__slider">
            <div className="container">
                <div className="slider__intro">
                    { data?.intro?.heading && (
                        <h2 className="section-heading">{ data?.intro?.heading }</h2>
                    )}

                    { data?.intro?.rich_editor && (
                        <Text className={ clsx('') }>
                            { data?.intro?.rich_editor }
                        </Text>
                    )}

					{ data?.intro?.buttons && (
						<Buttons buttons={ data?.intro?.buttons } className={ clsx('') } />
                    )}
                    
                </div>
            </div>

            <div className="slider__slider">
                <Splide options={ { width: '100%', rewind: false, gap: '40px' } }>
                    { data?.slider.length > 0 && 
                        data?.slider.map((item, i) => (
                            <SplideSlide>
                                <div className="container">
                                    <Image src={ item?.slide?.image } alt={""} className=""/>
                                    <div className="splide__slide-content">
                                        { item?.slide?.main?.heading && (
                                            <h3>{ item?.slide?.main?.heading }</h3>
                                        )}

                                        { item?.slide?.main?.rich_editor && (
                                            <Text className={clsx('')}>
                                                { item?.slide?.main?.rich_editor }
                                            </Text>
                                        )}

                                        { item?.slide?.main?.buttons && (
                                            <Buttons buttons={ item?.slide?.main?.buttons } className={ clsx('') } />
                                        )}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </section>
    )
}