import React from 'react'
import image1 from '../assets/image-1.png'
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'
import image4 from '../assets/image-4.png'
import image5 from '../assets/image-5.png'
import image6 from '../assets/image-6.png'
import image7 from '../assets/image-7.png'
import image8 from '../assets/image-8.png'
import image9 from '../assets/image-9.png'
import image10 from '../assets/image-10.png'
import image11 from '../assets/image 23.png'

function CaseStudies() {
  return (
    <>
      <h1 className='text-6xl text-center text-white jaro mb-8'>Our Studies</h1>
          {/* Top Row: Horizontal Scroll */}
      <div className="overflow-x-auto py-4 flex justify-center">
        <div className="flex  justify-center gap-8 px-2 items-center flex-wrap">
          <img src={image1} alt="1" className="w-52 h-52 object-cover rounded-lg" />
          <img src={image2} alt="2" className="w-52 h-52 object-cover rounded-lg" />
          <img src={image3} alt="3" className="w-52 h-52 object-cover rounded-lg" />
          <img src={image4} alt="4" className="w-52 h-52 object-cover rounded-lg" />
          <img src={image5} alt="5" className="w-52 h-52 object-cover rounded-lg" />
          <img src={image6} alt="6" className="w-52 h-52 object-cover rounded-lg" />
          <img src={image7} alt="7" className="w-52 h-52 object-cover rounded-lg" />
        </div>
      </div>

      {/* Bottom Row: Grid Layout */}
     <div className="flex justify-center items-center gap-8 px-2 pb-6 flex-wrap">
    <img src={image8} alt="8" className="w-52 h-52 object-cover rounded-lg" />
    <img src={image9} alt="9" className="w-52 h-52 object-cover rounded-lg" />
    <img src={image10} alt="10" className="w-52 h-52 object-cover rounded-lg" />
    <img src={image11} alt="11" className="w-52 h-52 object-cover rounded-lg" />
  </div>
</>
   
  )
}

export default CaseStudies