"use client"

import React from "react"
import Preloader from "./Preloader"
import { useState } from "react"
import Image from "next/image"

function Media(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }
  return (
    <div className="relative">
      <article
        className={`w-full h-auto transition duration-500 rounded-md ease-out
              ${isImageLoaded ? "opacity-1" : "opacity-0"}`}
      >
        <Image
          src={props.src}
          alt={props.alt}
          onLoad={() => {
            handleImageLoad()
          }}
          className="w-full h-auto responsive"
        />
      </article>
      <Preloader isContentLoaded={isImageLoaded} />
    </div>
  )
}

export default Media
