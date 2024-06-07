import React from "react"

function Preloader(props) {
  return (
    <div
      className={`absolute top-0 w-full h-full ${
        props.isContentLoaded
          ? "opacity-0 bg-black"
          : "opacity-100 animate-pulse bg-black"
      }`}
    >
      <p className=" text-white flex h-full justify-center items-center">
        Generating content...
      </p>
    </div>
  )
}

export default Preloader
