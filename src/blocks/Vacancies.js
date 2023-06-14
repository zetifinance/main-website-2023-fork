import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useAllCareers } from '../hooks/useAllCareers';
import { useInView } from "react-intersection-observer";

export default function Vacancies({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Vacancies
    let postsArray = useAllCareers();

    return (
        <section inview={inView} id='vacancies' className={clsx('block block__vacancies', {'in-view': inView})}>
            <div className="container">
                <div className="vacancies__intro">
                    {intro_heading && (
                        <h2 className="section-heading">{intro_heading}</h2>
                    )}

                    {intro_content && (
                        <Text className={ clsx('') }>
                            {intro_content}
                        </Text>
                    )}

                    {intro_buttons && (
						<Buttons buttons={intro_buttons} className={clsx('')} />
                    )}
                </div>

                <div className={clsx('vacancies__list')}>
                    {postsArray.map((vacancy) => {
                        const vacancy_heading = vacancy?.node?.frontmatter?.title;
                        const vacancy_apply_link = vacancy?.node?.fields?.slug;
                        const vacancy_excerpt = vacancy?.node?.frontmatter?.excerpt;
                        const vacancy_location = vacancy?.node?.frontmatter?.location;
                        const vacancy_hours = vacancy?.node?.frontmatter?.hours;

                        return (
                            <div className="vacancies__item">
                                <div className="vacancies__item-upper">
                                    {vacancy_heading && (
                                        <h3>{vacancy_heading}</h3>
                                    )}

                                    {vacancy_apply_link && (
                                        <a className="button button--standard button--white-border" href={vacancy_apply_link} tartget="_blank" rel="noreferrer noopener">
                                            Apply
                                            <svg width="40px" height="18px" viewBox="0 0 40 18" version="1.1">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Home-Concept-1" transform="translate(-295.000000, -689.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                        <g id="Group-2" transform="translate(84.000000, 148.000000)">
                                                            <g id="CTA" transform="translate(0.000000, 519.000000)">
                                                                <g id="right-arrow-(8)" transform="translate(211.000000, 22.000000)">
                                                                    <path d="M29.4326576,10 L0.566775614,9.95982362 C0.253754086,9.95982362 0,9.52110216 0,8.97991181 C0,8.43872146 0.253754086,8 0.566775614,8 L29.4332244,8.04017638 C29.7462459,8.04017642 30,8.47889787 30,9.02008819 C30,9.56127852 29.7462459,10 29.4332244,10 L29.4326576,10 Z" id="Path"></path>
                                                                    <path d="M40,9.01182654 C34.6844444,10.9986859 28.0879532,14.3971616 24,18 L27.2243275,9.00047306 L24.0121637,0 C28.0963743,3.60756899 34.6872515,7.01361367 40,9.01182654 Z" id="Path"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                {vacancy_excerpt && (
                                    <Text className={clsx('')}>
                                        {vacancy_excerpt}
                                    </Text>
                                )}

                                <div className="vacancies__item-tags">
                                    <span>
                                        <svg width="12px" height="14.8px" viewBox="0 0 12 14.8" version="1.1">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Careers-Concept-1" transform="translate(-295.000000, -4699.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                    <g id="Careers" transform="translate(274.000000, 3349.000000)">
                                                        <g id="Group-14" transform="translate(0.000000, 1225.000000)">
                                                            <g id="Group-8" transform="translate(1.000000, 112.000000)">
                                                                <g id="pin-(2)" transform="translate(20.000000, 13.000000)">
                                                                    <path d="M6,0 C2.68632723,0 3.21334959e-05,2.65046918 3.21334959e-05,5.91998861 C-0.00487316813,7.39321483 0.551992374,8.81437684 1.56004787,9.90118096 L5.71500307,14.6704718 C5.78624789,14.7526732 5.89037961,14.8 6,14.8 C6.10962039,14.8 6.21375211,14.7526732 6.28499693,14.6704718 L10.4399521,9.90118096 C11.4480076,8.81437684 12.0048732,7.39321483 11.9999679,5.91998861 C11.9999679,2.65046918 9.31367277,0 6,0 L6,0 Z M9.86995827,9.42018188 L6,13.8638733 L2.13004173,9.42388188 C0.210764093,7.35809217 0.304620641,4.1608397 2.34186311,2.20812058 C4.37910558,0.255401455 7.62089442,0.255401455 9.65813689,2.20812058 C11.6953794,4.1608397 11.7892359,7.35809217 9.86995827,9.42388188 L9.86995827,9.42018188 Z" id="Shape"></path>
                                                                    <path d="M5.8,3.2 C4.36405965,3.2 3.2,4.36405965 3.2,5.8 C3.2,7.23594035 4.36405965,8.4 5.8,8.4 C7.23594035,8.4 8.4,7.23594035 8.4,5.8 C8.4,4.36405965 7.23594035,3.2 5.8,3.2 L5.8,3.2 Z M5.8,7.65714286 C4.77432832,7.65714286 3.94285714,6.82567168 3.94285714,5.8 C3.94285714,4.77432832 4.77432832,3.94285714 5.8,3.94285714 C6.82567168,3.94285714 7.65714286,4.77432832 7.65714286,5.8 C7.65714286,6.82567168 6.82567168,7.65714286 5.8,7.65714286 Z" id="Shape"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        {vacancy_location}
                                    </span>
                                    <span>
                                        <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Careers-Concept-1" transform="translate(-503.000000, -4699.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                    <g id="Careers" transform="translate(274.000000, 3349.000000)">
                                                        <g id="Group-14" transform="translate(0.000000, 1225.000000)">
                                                            <g id="Group-8" transform="translate(209.000000, 112.000000)">
                                                                <g id="clock-(1)" transform="translate(20.000000, 13.000000)">
                                                                    <path d="M7,0 C3.13400675,0 0,3.13400675 0,7 C0,10.8659932 3.13400675,14 7,14 C10.8659932,14 14,10.8659932 14,7 C13.9954414,3.13589656 10.8641034,0.00455859133 7,0 L7,0 Z M7,12.7272727 C3.83691461,12.7272727 1.27272727,10.1630854 1.27272727,7 C1.27272727,3.83691461 3.83691461,1.27272727 7,1.27272727 C10.1630854,1.27272727 12.7272727,3.83691461 12.7272727,7 C12.7234158,10.1614864 10.1614864,12.7234158 7,12.7272727 L7,12.7272727 Z" id="Shape"></path>
                                                                    <path d="M7.63636364,6.73654545 L7.63636364,3.18181818 C7.63636364,2.83036425 7.35145393,2.54545455 7,2.54545455 C6.64854607,2.54545455 6.36363636,2.83036425 6.36363636,3.18181818 L6.36363636,7 C6.36367241,7.16876034 6.43074131,7.33059553 6.55009091,7.44990909 L8.45918182,9.359 C8.70887747,9.60016413 9.10578122,9.59671515 9.35124818,9.35124818 C9.59671515,9.10578122 9.60016413,8.70887747 9.359,8.45918182 L7.63636364,6.73654545 Z" id="Path"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        {vacancy_hours}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}