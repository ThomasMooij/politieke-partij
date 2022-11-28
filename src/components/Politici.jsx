import React from 'react'
import Edem from '../assets/edem.png';
import Vin from '../assets/vin.png';
import Kir from '../assets/kir.png';


const Politici = () => {
  return (
    <div name="pol" className='w-full py-[10rem] px-4 bg-[#FFF5EE]'> 
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    {/* card 1*/}
    <a href='/Ed'className='w-full shadow-2xl py-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
    <img src={Edem} width={100}  className=' rounded-2xl mx-auto mt-[-3rem]'></img>
    <h2 className='text-center text-2xl font-bold py-6'>Adam Rijnbeek</h2>
    <p className='text-center text-xl font-bold py-3'> Staat voor </p>
    <div>
      <p className='text-center text-xl py-3'>Infrastructuur voor en naar Uithoorn</p>
      <p className='text-center text-xl py-3'>Afschaffing van de module dictatuur</p>
      <p className='text-center text-xl py-3'>Werk voor ieder bij de Appie</p>
    </div>
    </a>
    {/* card 2*/}
    <a href='/Vin' className='w-full shadow-2xl py-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
    <img src={Vin} width={100}  className=' rounded-2xl mx-auto mt-[-3rem]'></img>
    <h2 className='text-center text-2xl font-bold py-6'>Vinczenzo Javonaviwc</h2>
    <p className='text-center text-xl font-bold py-3'> Staat voor </p>
    <div>
      <p className='text-center text-xl py-3'>Eerlijke economie</p>
      <p className='text-center text-xl py-3'>Ieder naar zijn eigen vermogen</p>
      <p className='text-center text-xl py-3'>Nederland eerst</p>
    </div>
    </a>
    {/* card 3*/}
    <a href='/Kir' className='w-full shadow-2xl py-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
    <img src={Kir} width={100}  className=' rounded-2xl mx-auto mt-[-3rem]'></img>
    <h2 className='text-center text-2xl font-bold py-6'>Kerem Tulutcu</h2>
    <p className='text-center text-xl font-bold py-3'> Staat voor </p>
    <div>
      <p className='text-center text-xl py-3'>Eenheid en gelijkheid</p>
      <p className='text-center text-xl py-3'>Gelijke kansen op de werkvloer</p>
      <p className='text-center text-xl py-3'>Samenhorigheid en gehoorzaamheid</p>
    </div>
    </a>

    </div>
    </div>

  )
}

export default Politici