import React from 'react'

const Stand = () => {
  return (
    <div name="stand" className='w-full py-[10rem] px-4 bg-[#FFF5EE]'>
    <div className=' w-full flex justify-center'>
                 <div className='sm:text-right pb-12 pl-4'>
                    <p  className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Klik op een van de categorieen voor een uitgebreid partij programma
                    </p>
                </div> 
            </div>
    <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8 my-8'> 
    {/* card 1*/}
    <a  href='/Jur' className='w-full shadow-2xl py-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h2 className='text-center text-2xl font-bold py-6'>Partij Programma </h2>
        <p className='text-center text-xl font-bold py-3'> Politiek-juridisch </p>
    <button className='text-black border-4 px-6 py-5 my-5 mx-auto flex items-center justify-center hover:bg-white'>Zie standpunten</button>
    </a>
    {/* card 2*/}
    <a href='/Eco' className='w-full shadow-2xl py-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h2 className='text-center text-2xl font-bold py-6'>Partij Programma </h2>
        <p className='text-center text-xl font-bold py-3'> Sociaaleconomisch </p>
    <button className='text-black border-4 px-6 py-5 my-5 mx-auto flex items-center justify-center hover:bg-white'>Zie standpunten</button>
    </a>
    {/* card 3*/}
        <a href='/Cult' className='w-full shadow-2xl py-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h2 className='text-center text-2xl font-bold py-6'>Partij Programma </h2>
        <p className='text-center text-xl font-bold py-3'> Sociaal-cultureel  </p>
    <button className='text-black border-4 px-6 py-5 my-5 mx-auto flex items-center justify-center hover:bg-white'>Zie standpunten</button>
    </a>

    </div>
    </div>

  )
}

export default Stand