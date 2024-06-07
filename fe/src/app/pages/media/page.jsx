import React from "react"
import Media from "../../components/media/Media"
import Cat from "../../../../public/images/cat.JPG"
import Preloader from "../../components/media/Preloader"

function page() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-start-1 col-end-4 p-8">
        <Media src={Cat} alt="Cat image" />
      </div>
      <div className="col-start-4 col-end-7 p-8">
        <div className="relative h-full w-full">
          <Preloader />
        </div>
      </div>
    </div>
  )
}

export default page
