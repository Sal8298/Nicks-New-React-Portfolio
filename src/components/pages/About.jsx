import React from 'react';
// import './styles/globals.css';
import avatar from './Assets/avatar.png'

const About = () => {
  return (
    <div name='about' className='w-full bg-[#0a182e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full  pb-80'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              More About Me
            </p>
          </div>
          <div></div>
        </div>
        {/* Avatar is located here.  */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right ml-28 text-4xl font-bold font-railway'>
            <p>Hi. I'm Nicholas Mamberger, nice to meet you. Please take a look around my website.</p>
          </div>
          <div></div>
          <img src={avatar} className=' max-w-[1000px] w-full flex-1 justify-center grid-cols-2 gap-8 px-4 flex flex-col' alt='Nicholas Mamberger avatar'></img>
        </div>

        <p className='font-railway mt-1 py-4 max-w-[700px] text-2xl flex flex-col justify-center'>I have a strong passion for developing high-quality software that enhances the lives of people around me. My expertise lies in crafting software solutions for a diverse range of clients, including individuals, small businesses, and large enterprises. Imagine having access to a skilled web developer of this caliber - what possibilities could this bring to your project?
        </p>

      </div>
    </div>
  );
};

export default About;


