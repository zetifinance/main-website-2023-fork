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

                <div className="slider__slider">
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <Image src={ data?.slider?.slide?.image } alt={""} className=""/>
                            <div>
                                { data?.slider?.slide?.main?.heading && (
                                    <h3>{ data?.slider?.slide?.main?.heading }</h3>
                                )}

                                { data?.slider?.slide?.main?.rich_editor && (
                                    <Text className={clsx('')}>
                                        { data?.slider?.slide?.main?.rich_editor }
                                    </Text>
                                )}
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
    )
}