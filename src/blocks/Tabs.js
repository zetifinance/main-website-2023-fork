import clsx from 'clsx'
import React, { useEffect } from 'react';
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Image from '../resolvers/Image'
import initTabs from '../lib/tabs'

export default function Tabs({ data }) {
    return (
        useEffect(() => {
            initTabs();
          }, []),

        <section className="block block__tabs">
            <div className="container">
                <div className="tabs__intro">
                    <div>
                        {data.intro.heading && (
                            <h2 className="section-heading">{data.intro.heading}</h2>
                        )}

                        { data.intro.rich_editor && (
                            <Text className={ clsx('') }>
                                { data.intro.rich_editor }
                            </Text>
                        )}
                    </div>

					{data.intro.buttons && (
						<Buttons buttons={data.intro.buttons} className={ clsx('') } />
                    )}
                    
                </div>
            </div>
        </section>
    )
}