import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Testimonials({ data }) {
    return (
        <section className="block block__testimonials">
            <div className="container">
                <div className="testimonials__intro">
                    <div>
                        {data?.intro?.heading && (
                            <h2 className="section-heading">{data?.intro?.heading}</h2>
                        )}

                        { data?.intro?.rich_editor && (
                            <Text className={ clsx('') }>
                                { data?.intro?.rich_editor }
                            </Text>
                        )}
                    </div>

					{data?.intro?.buttons && (
						<Buttons buttons={data?.intro?.buttons} className={ clsx('') } />
                    )}
                    
                </div>
            </div>
            <div className="container container--float-left">
                <div className="testimonials__slider">
                    <Splide options={ 
                        {
                            mediaQuery: 'min',
                            perPage:1, 
                            perMove:1, 
                            rewind:false, 
                            gap:'40px', 
                            arrows:false,
                            breakpoints: {
                                1200: {
                                    perPage:3, 
                                },
                            },
                        }
                    }>
                        {data?.testimonials?.length > 0 &&
                            data?.testimonials?.map((item, i) => {
                                const testimonial = item?.testimonial;
                                const testimonial_image = testimonial?.image;
                                const testimonial_content = testimonial?.testimonial;
                                const testimonial_name = testimonial?.name;
                                const testimonial_job_title = testimonial?.job_title;
                                const testimonial_company_name = testimonial?.company_name;

                                return (
                                    <SplideSlide key={i}>
                                        <div className="testimonial">
                                            {testimonial_image && (    
                                                <Image src={testimonial_image} alt={""} className="" />
                                            )}

                                            {testimonial_content && (
                                                <blockquote className="testimonial__content">
                                                    <p>{testimonial_content}</p>
                                                </blockquote>
                                            )}

                                            <div className="testimonial__lower">
                                                {testimonial_name && (
                                                    <p className="testimonial__name">{testimonial_name}</p>
                                                )}

                                                {(testimonial_job_title || testimonial_company_name) && (
                                                    <div class="testimonial__lower-details">
                                                    {testimonial_job_title && (
                                                        <p className="testimonial__job">{testimonial_job_title}</p>
                                                    )}

                                                    {testimonial_company_name && (
                                                        <p className="testimonial__company">{testimonial_company_name}</p>
                                                    )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                );
                            })
                        }
                    </Splide>
                </div>
            </div>
        </section>
    )
}