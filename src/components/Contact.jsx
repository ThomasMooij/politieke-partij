import React from 'react'

const Contact = () => {
  return (
    <section name='contact'>
    <div className='w-full h-screen bg-[#FFF5EE] flex justify-center p-11'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='p-8'>
                <p className='text-4xl font-bold inline border-b-4'>Meld je aan bij de partij!</p>
                <p className='pt-8 '>Bij het Autoritair proletoriaat is het gehele proletariaat welkom!</p>
                <p className=''> Wij maken geen onderscheid in afkomst noch achtergrond </p>
            </div>
            <input className="m-4 p-2" type='text' placeholder='Vul uw naam in' name='name'></input>
            <input className="m-4 p-2" type='text' placeholder='Vul uw e-mail in' name='email'></input>
            <input className="m-4 p-2" type='text' placeholder='Selecteer de reden van uw aanvraag' name='type'></input>
            <textarea className="m-4 p-2" name='message' cols='30' rows='5'></textarea>
            <button className='text-black border-2 inline hover:bg-white px-4 py-3 mx-auto'>Verstuur </button>
        </form>
    </div>
    </section>
  )
}

export default Contact