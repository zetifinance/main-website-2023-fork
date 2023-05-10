import clsx from 'clsx'
import React from 'react'
import Text from '../components/UI/Text'
import Buttons from '../components/UI/Buttons'
import Photos from '../components/UI/Photos'

export default function LogoGrid({ data }) {
    return (
        <section className="block block__logo-grid">
            <div className="container">
                <div className="logo-grid__intro">
                    {data?.title && (
                        <h2 className="section-heading">{ data?.title }</h2>
                    )}

                    {data?.content && (
                        <Text className={clsx('')}>
                            {data?.content}
                        </Text>
                    )}

					{data?.buttons && (
						<Buttons buttons={data?.buttons} className={clsx('')} />
					)}
                </div>

                {data?.photos && (
                    <div className="logo-grid__logos">
                        <Photos photos={data?.photos} className={clsx('')} />
                    </div>
                )}

            </div>
        </section>
    )
}