import clsx from 'clsx'
import React from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'

export default function Maps({ data }) {
    // Intro
    const intro_heading = data?.intro?.heading;
    const intro_content = data?.intro?.rich_editor;
    const intro_buttons = data?.intro?.buttons;

    // Slide List
    const maps = data?.maps;

    return (
        <section className={clsx('block block__maps')}>
            <div className="container">
                <div className="maps__intro">
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

                <div className={clsx('maps__grid')}>
                    { maps?.length > 0 &&
                        maps?.map((item, i) => {
                            const map_name = item?.map_name;
                            const map_api = item?.map_api;

                            return (
                                <div className="grid__item" key={i}>
                                    { map_name && (
                                        <h3>{map_name}</h3>
                                    )}

                                    { map_api && (
                                        {map_api}
                                    )}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}