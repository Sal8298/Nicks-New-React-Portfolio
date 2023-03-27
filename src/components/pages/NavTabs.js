import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from './Assets/myLogo.jpg';
import { Link } from 'react-scroll';

const NavTabs = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu 
      also the list items are set with buttons that way they can have a change when selected. The change is similar enough to being highlighted and goes above and beyond that*/}
      <ul className='hidden md:flex'>
        <li>
        <button class="font-bold bg-red-700 hover:bg-red-600 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 ...">
          <Link to='home' smooth={true} duration={500} className= 'text-font-railway'>
            Home/A little about myself
          </Link>
          </button>
        </li>
        <li>
          <button class="font-bold bg-blue-700 hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring focus:ring-violet-300 ...">
          <Link to='about' smooth={true} duration={500}>
            More About Me
          </Link>
          </button>
        </li>
        <li>
          <button class="font-bold bg-green-700 hover:bg-green-600 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 ...">
          <Link to='skills' smooth={true} duration={500}>
            Resume/Skills
          </Link>
          </button>
        </li>
        <li>
        <button class="font-bold bg-orange-700 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 ...">
          <Link to='work' smooth={true} duration={500}>
            Portfolio
          </Link>
          </button>
        </li>
        <li>
          <button class="font-bold bg-gray-700 hover:bg-violet-600 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-600 ...">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick}>
      {/* <div onClick={handleClick} className='md:hidden z-10'> */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 bottom-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home/ A little about myself
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            More About Me
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Resume/Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Portfolio/Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

{/* was going to be the FOOTER Section */}
        {/* Social icons */}
      <footer>
        <div className='lg:flex fixed flex-col bottom-[35%] bottom-0'>
          {/* hidden can be added */}
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] hover:ml-[-125px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/nicholas-mamberger-4b7172133/'
              >
                Linkedin <FaLinkedinIn size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] hover:ml-[-125px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/NickHM05'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://getform.io/f/84daa07e-1c8c-4197-9772-d31122915631/'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li> */}
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] hover:ml-[-125px] duration-300 bg-[#d41b28]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://my.indeed.com/p/nicholasm-zrmlq6u'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-10px] hover:ml-[-125px] duration-300 bg-[#1428bb]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.facebook.com/profile.php?id=100006164629138'
              >
                Facebook <FaFacebook size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default NavTabs;
