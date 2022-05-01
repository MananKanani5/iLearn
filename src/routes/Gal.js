import React from 'react'
import Gallery from 'react-grid-gallery';
import IMAGES from "./IMAGES";

function Gal() {
  return (
    <>
    <section className='px-8 max-sm:px-5 py-8  bg-[#fff7f2] m-z fade-in flex justify-between flex-wrap'>
      <Gallery images={IMAGES}/>
    </section>
    </>
  )
}

export default Gal