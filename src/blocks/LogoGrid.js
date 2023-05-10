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
                    {data?.intro?.heading && (
                        <h2 className="section-heading">{ data?.intro?.heading }</h2>
                    )}

                    {data?.intro?.rich_editor && (
                        <Text className={clsx('')}>
                            {data?.intro?.rich_editor}
                        </Text>
                    )}

					{data?.intro?.buttons && (
						<Buttons buttons={data?.intro?.buttons} className={clsx('')} />
					)}
                </div>

                {data?.images && (
                    <div className="logo-grid__logos">
                        <Photos photos={data?.images} className={clsx('')} />
                    </div>
                )}

            </div>
        </section>
    )
}