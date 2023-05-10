import React from 'react'
import Image from '../../resolvers/Image'

export default function Photos({ photos, className }) {
  return (
    <>
      {photos.length > 0 &&
        photos.map((item, i) => (
          <Image src={item?.photoSingle?.image} alt="" className=""/>
        ))}
    </>
  )
}
