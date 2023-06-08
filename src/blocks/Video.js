import React from 'react'

export default function Video({ data }) {
  const isEmbed = data?.variant === 'embed';

  return (
    <section className="block block__video">
        <div className="container">
          { 
            isEmbed ? (
              <>
                {data?.video}
              </>
            ) : (
              <video src={data?.video} playsInline controls>
                <track default kind="captions" srclang="en" src=""></track>
              </video>
            )
          }
        </div>
    </section>
  )
}