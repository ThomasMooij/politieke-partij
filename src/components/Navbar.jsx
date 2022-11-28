import React from 'react';
import {useState} from 'react';
import Logo from '../assets/logo.jpeg';
import {FaBars ,FaTimes , FaLinkedin , FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephoneFill} from 'react-icons/bs';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [toggle , setToggle] = useState('false');
    
    const onClick = () =>{
        setToggle(!toggle)
    }
    console.log(!toggle);
  return (
    // Navbar component
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 pb-6'>

    {/*Logo */}
    <article className='flex '> 
    <img src={Logo} className='rounded-full' style={{ width:'50px' }}></img> 
    <p className='hidden md:flex px-6 pt-3'>Autoritair proletariaat</p>
    </article>

    {/*Menu-items */}
        <ul className='hidden md:flex'>
            <li>
            <Link to="main" smooth={true} offset={50} duration={500}>home</Link>
            </li>
            <li>
                <Link to='agenda' smooth={true} duration={500}>agenda</Link>
            </li>
            <li>
                <Link to='pol' smooth={true} duration={500}>Politici</Link>
            </li>
            <li>
                <Link to='stand' smooth={true} duration={500}>Standpunten</Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>Meld je aan!</Link>            
            </li>
        </ul>

    {/*Hamburger menu */}
        <article onClick={onClick}className='md:hidden z-10 flex justify-items-end'>
            {!toggle ? <FaBars /> : <FaTimes />}
        </article>

    {/*Mobile menu */}
    <ul className= {!toggle ?  'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-3xl'>   
        <Link onClick={onClick} to="main" smooth={true} offset={50} duration={500}>Home</Link>
        </li>
        <li className='py-6 text-3xl'>
        <Link onClick={onClick} to='agenda' smooth={true} duration={500}>Agenda</Link>
        </li>
        <li className='py-6 text-3xl'>
        <Link onClick={onClick} to='politici' smooth={true} duration={500}>Politici</Link>
        </li>
        <li className='py-6 text-3xl'>Standpunten</li>
        <li className='py-6 text-3xl'>
        <Link onClick={onClick} to='contact' smooth={true} duration={500}>Meld je aan!</Link>
        </li>


</ul>
    {/*Social media */}
        <article className='hidden md:flex fixed flex-col top-[35%] left-0 '>
        <ul>
            <li className=''> 
            <a className=' w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
              09001414 <BsTelephoneFill size={40} /> 
            </a>       
            </li>

            <li> 
            <a className=' w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
             p@partij.nl <HiOutlineMail size={40} /> 
            </a>
            </li>

        </ul>
        </article>
    </nav>
  )
}

export default NavBar