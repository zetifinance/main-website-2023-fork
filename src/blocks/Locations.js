import clsx from 'clsx';
import React from 'react';
import Text from '../components/UI/Text';
import Buttons from '../components/UI/Buttons';
import { useInView } from "react-intersection-observer";

export default function Locations({ data }) {
    // In View
    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true,
    });

    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Slide List
    const grid = data?.locations;

    return (
        <section inview={inView} className={clsx('block block__locations', {'in-view': inView})}>
            <div className="container">
                <div className="locations__intro">
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

                <div className={clsx('locations__grid grid', 'grid--col-Three', 'grid--large-card')}>
                    { grid?.length > 0 &&
                        grid?.map((item, i) => {
                            const location_name = item?.location_name;
                            const location_address = item?.address;
                            const location_email = item?.email_address;
                            const location_phone = item?.phone_number;

                            return (
                                <div className="grid__item" key={i}>
                                    <span>{(i+1) < 10 ? "0" + (i + 1) : (i + 1)}</span>

                                    <div className="grid__item-content">

                                        {location_name && (
                                            <h3>{location_name}</h3>
                                        )}

                                        {location_address && (
                                            <Text className={clsx('')}>
                                                {location_address}
                                            </Text>
                                        )}

                                        {location_email && (
                                            <a href={"mailto:" + location_email}>{location_email}</a>
                                        )}
                                        {location_phone && (
                                            <a href={"tel:" + location_phone}>{location_phone}</a>
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