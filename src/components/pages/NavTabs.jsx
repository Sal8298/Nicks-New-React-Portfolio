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

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home/A little about myself
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            More About Me
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Resume/Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
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
