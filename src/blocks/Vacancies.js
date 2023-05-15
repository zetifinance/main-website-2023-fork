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
                            const accordion_heading = item?.heading;
                            const accordion_content = item?.rich_editor;
                            const accordion_buttons = item?.buttons;

                            return (
                                <div className="accordions__item">
                                    <div className="accordions__item-inner">
                                        {accordion_content && (
                                            <Text className={clsx('')}>
                                                {accordion_content}
                                            </Text>
                                        )}
                                        {accordion_buttons && (
                                            <Buttons buttons={accordion_buttons} className={clsx('')} />
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