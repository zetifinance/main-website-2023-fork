import clsx from 'clsx'
import React, { useEffect } from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'

export default function Vacancies({ data }) {
    useEffect(() => {
    }, []);

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Vacancies
    const vacancies = data?.vacancies;

    return (
        <section className={clsx('block block__vacancies')}>
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
                    {vacancies?.length > 0 &&
                        vacancies?.map((item, i) => {
                            const vacancy_heading = item?.heading;
                            const vacancy_content = item?.rich_editor;
                            const vacancy_apply_link = item?.apply_link;
                            const vacancy_tags = item?.tags;

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
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Home-Concept-1" transform="translate(-295.000000, -689.000000)" fill="#FFFFFF" fill-rule="nonzero">
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
                                    {vacancy_content && (
                                        <Text className={clsx('')}>
                                            {vacancy_content}
                                        </Text>
                                    )}
                                    {vacancy_tags?.length > 0 &&
                                        <div className="vacancies__item-tags">
                                            {vacancy_tags?.map((item, i) => {
                                                const tag_image = item?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
                                                const tag_heading = item?.heading;

                                                return (
                                                    <span key={i}>
                                                        <img src={tag_image} alt={""} className="" />
                                                        {tag_heading}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}