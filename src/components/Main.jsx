import React from 'react'
import {BsCheckLg} from "react-icons/bs"

const Main = () => {
  return (
    <section name='main'>
    <div className='w-full h-screen bg-[#FFF5EE]'>
    
      {/* main container */}   
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className=' py-4 text-4xl sm:text-6xl font-bold text-[#0a192f] '>De partij die het hef in eigen hand neemt</h1>
          <div className=''>
          <article className='flex py-4 justify-evenly'>
           <h2 className=' px-2 text-3xl sm: text-4x1 text-[#8892b0]'> Een volk</h2> <span className='flex justify-center'><BsCheckLg /></span>
          </article>

          <article className='flex py-4 justify-evenly'>
          <h2 className=' px-2  text-3xl sm: text-4x1 text-[#8892b0]'> Een staat</h2> <span><BsCheckLg /></span>
          </article>

          <article className='flex py-4 justify-evenly'>
          <h2 className=' px-2  text-3xl sm: text-4x1 text-[#8892b0]' > Een leider</h2> <span><BsCheckLg /></span>
          </article>
          </div>
          <div>
            <button className='text-black border-4 px-6 py-5 my-5 mx-auto flex items-center justify-center hover:bg-white'>Download partij programma </button>
          </div>

      </div>
      
    </div>
    </section>
  )
}

export default Main