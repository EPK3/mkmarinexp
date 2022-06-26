import React from 'react'
import cover from '../img/cover.jpg'

const Banner = () => {
  return (
    <div className='flex justify-center m-auto w-screen'>
        <div style={{ backgroundImage: `url('${cover}')`}} className='flex justify-center content-center bg-cover bg-center bg-no-repeat rounded-xl mx-20 my-8 w-[85vw] h-[80vh]'>
            <div className='m-auto font-Gabriela text-white opacity-80'>
                <h1 className='text-9xl m-auto'>MK Marine</h1>
                <h1 className='text-9xl m-auto'>Exploration</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner