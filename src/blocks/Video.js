import React from 'react'

export default function Video({ data }) {
  return (
    <section className="block block__video">
        <div className="container">
          <video src={data?.video} playsInline controls>
            <track default kind="captions" srclang="en" src=""></track>
          </video>
        </div>
    </section>
  )
}