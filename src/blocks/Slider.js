import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import Image from '../resolvers/Image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { getAggregateStats } from '../services/AggregateStatsService';
import { useEffect, useState } from 'react';
// Default theme
import '@splidejs/react-splide/css';

export default function Slider({ data }) {
    // In View
    const [ref, inView] = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    const [ref2, inView2] = useInView({
        threshold: .3,
        triggerOnce: true,
    });
    const [aggregateStatsData, setData] = useState(null);


    // Options
    const isStandard = data?.variant === 'default';
    const isVertical = data?.variant === 'vertical';

    // Intro
    const intro = data?.intro;
    const intro_heading = intro?.heading;
    const intro_content = intro?.rich_editor;
    const intro_buttons = intro?.buttons;

    // Slider
    const slider = data?.slider;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let jsonData = await getAggregateStats()
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section inview={inView} ref={ref} className={clsx('block block__slider', { 'block__slider--standard': isStandard }, { 'block__slider--vertical': isVertical }, { 'in-view': inView })}>
            <div className="container">
                <div className="slider__intro">
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
            </div>

            {isStandard ? (
                <div className="container">
                    <div className="slider__slider">
                        <Splide options={{
                            width: '100%',
                            type: 'fade',
                            rewind: false,
                            gap: '40px',
                            arrows: false,
                        }}>



                            {slider?.length > 0 &&
                                slider?.map((item, i) => {
                                    // Slide Variant
                                    const slide_variant = item?.slide?.variant;
                                    const isStat = slide_variant === 'statistic';

                                    // Slide Content
                                    const slide_heading = item?.slide?.main?.heading;
                                    const slide_content = item?.slide?.main?.rich_editor;
                                    const slide_buttons = item?.slide?.main?.buttons;

                                    // Slide Image
                                    const slide_image = item?.slide?.main?.image;

                                    // Slide Statistic
                                    const automated_source = item?.slide?.statistic?.automated_source;

                                    let slide_stat_pretext = item?.slide?.statistic?.pretext;
                                    let slide_stat = item?.slide?.statistic?.stat;
                                    let slide_stat_text = item?.slide?.statistic?.text;
                                    switch (automated_source) {
                                        case "carbon": {
                                            slide_stat_pretext = ""
                                            slide_stat = Math.round((aggregateStatsData?.totalCo2Saving ?? 7000000)/1000)
                                            slide_stat_text = "tonnes"
                                            break;
                                        }
                                        case "nox": {
                                            slide_stat_pretext = ""
                                            slide_stat = Math.round(aggregateStatsData?.totalNoxSaving ?? 14000)
                                            slide_stat_text = "kg"
                                            break;
                                        }
                                        case null: {
                                            break;
                                        }
                                        default: {
                                            break;
                                        }

                                    }
                                    return (
                                        <SplideSlide key={i}>
                                            <div inview={inView2} ref={ref2} className="container">
                                                {isStat ? (
                                                    <div className={clsx("splide__slide-statistic", { 'in-view': inView })}>
                                                        <svg width="400px" height="400px" viewBox="0 0 400 400" version="1.1">
                                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <circle id="Oval" stroke="#FD8C04" strokeWidth="30" cx="200" cy="200" r="185"></circle>
                                                            </g>
                                                        </svg>

                                                        {inView2 && (
                                                            <p>
                                                                {slide_stat_pretext}
                                                                <CountUp duration={2} delay={1} end={slide_stat} />
                                                                {slide_stat_text}
                                                            </p>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Image src={slide_image} alt={""} className="" />
                                                )}

                                                <div className="splide__slide-content">
                                                    {slide_heading && (
                                                        <h3>{slide_heading}</h3>
                                                    )}

                                                    {slide_content && (
                                                        <Text className={clsx('')}>
                                                            {slide_content}
                                                        </Text>
                                                    )}

                                                    {slide_buttons && (
                                                        <Buttons buttons={slide_buttons} className={clsx('')} />
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
            ) : (
                <div className="container">
                    <div className="slider__slider">
                        <Splide options={{ width: '100%', type: 'fade', rewind: true, gap: '40px', arrows: false, paginationDirection: 'ttb' }}>
                            {slider?.length > 0 &&
                                slider?.map((item, i) => {
                                    // Slide Content
                                    const slide_image = item?.slide?.image;
                                    const slide_heading = item?.slide?.main?.heading;
                                    const slide_content = item?.slide?.main?.rich_editor;
                                    const slide_buttons = item?.slide?.main?.buttons;

                                    // Slide List
                                    const slide_list = item?.slide?.list;

                                    return (
                                        <SplideSlide key={i}>
                                            <div className="splide__slide-content">
                                                {slide_heading && (
                                                    <h3>{slide_heading}</h3>
                                                )}

                                                {slide_content && (
                                                    <Text className={clsx('')}>
                                                        {slide_content}
                                                    </Text>
                                                )}

                                                {slide_buttons && (
                                                    <Buttons buttons={slide_buttons} className={clsx('')} />
                                                )}
                                                {slide_image && (
                                                    <Image src={slide_image} alt={""} className="" />
                                                )}
                                            </div>
                                            <ul className="splide__splide-list list">
                                                {slide_list?.length > 0 &&
                                                    slide_list?.map((item, i) => {
                                                        // List Content
                                                        const list_item_heading = item?.list_item?.heading;
                                                        const list_item_content = item?.list_item?.rich_editor;
                                                        const list_item_buttons = item?.list_item?.buttons;
                                                        const list_item_image = item?.list_item?.image;

                                                        return (
                                                            <li className="list__item" key={i}>
                                                                {list_item_image && (
                                                                    <div className="list__item-image">
                                                                        <Image src={list_item_image} alt={""} className="" />
                                                                    </div>
                                                                )}
                                                                <div className="list__item-content">
                                                                    {list_item_heading && (
                                                                        <h4>{list_item_heading}</h4>
                                                                    )}

                                                                    {list_item_content && (
                                                                        <Text className={clsx('')}>
                                                                            {list_item_content}
                                                                        </Text>
                                                                    )}

                                                                    {list_item_buttons && (
                                                                        <Buttons buttons={list_item_buttons} className={clsx('')} />
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