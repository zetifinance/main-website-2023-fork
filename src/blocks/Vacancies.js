import clsx from 'clsx'
import React, { useEffect } from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'

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
                                    <div>
                                        {vacancy_heading && (
                                            <h3>{vacancy_heading}</h3>
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
                                                const tag_image = item?.image;
                                                const tag_heading = item?.heading;
                                                return (
                                                    <span>
                                                        <Image src={tag_image} alt={""} className="" />
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