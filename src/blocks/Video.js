import React from 'react'

export default function Video({ data }) {
  const isEmbed = data?.variant === 'Embed';

  return (
    <section className="block block__video">
        
          { 
            isEmbed ? (
              <div className="container" dangerouslySetInnerHTML={{ __html: data?.video }}/>
            ) : (
              <div className="container">
                <video src={data?.video} playsInline controls>
                  <track default kind="captions" srclang="en" src=""></track>
                </video>
              </div>
            )
          }
    </section>
  )
}