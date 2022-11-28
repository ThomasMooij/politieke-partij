import React from 'react'

const Agenda = () => {
  return (
<section name="agenda">
   <div className='w-full h-screen bg-[#FFF5EE] text-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className=' w-full flex justify-center'>
                 <div className='sm:text-right pb-12 pl-4'>
                    <p  className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Aankomende evenementen
                    </p>
                </div> 
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            {/* Item 1*/}
                <div className='sm:text-right text-4xl font-bold'> 
                <p>Toespraak van de Vader</p>
                    
                </div>
                <div>
                    <p>Locatie: Amsterdam</p>
                    <p>Datum: 22/11/22</p> 
                </div>
                <div>
                    <button className='text-black border-2 px-6 py-2 my-5 flex items-center hover:bg-white'>Meer info</button>
                </div>
                {/* Item 2*/}
                <div className='sm:text-right text-4xl font-bold'> 
                <p>Opstand van het sindicaat</p>             
                </div>
                <div>
                    <p>Locatie: Amsterdam</p>
                    <p>Datum: 16/03/22</p> 
                </div>
                <div>
                    <button className='text-black border-2 px-6 py-2 my-5 flex items-center hover:bg-white'>Meer info </button>
                </div>
                {/* Item 3*/}
                <div className='sm:text-right text-4xl font-bold'> 
                    <p>Beslag legging op overmatig rijkdom</p>
                </div>
                <div>
                    <p>Locatie: Amsterdam</p>
                    <p>Datum: 22/10/22</p> 
                </div>
                  <div>
                    <p>Locatie: Amsterdam</p>
                    <p>Datum: 22/10/22</p> 
                </div>
                <div>
                    <button className='text-black border-2 px-6 py-2 my-5 flex items-center hover:bg-white'>Meer info </button>
                </div>
            </div>
        <div>
    </div>
</div>
   </div>
</section>

  )
}

export default Agenda