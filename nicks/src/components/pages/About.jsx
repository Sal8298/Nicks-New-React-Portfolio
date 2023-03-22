import React from 'react';
// import './styles/globals.css';
import avatar from './Assets/avatar.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a182e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              More About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold font-railway'>
            <p>Hi. I'm Nicholas Mamberger, nice to meet you. Please take a look around.</p>
          </div>
          <div></div>
          <img src={avatar} className='w-full basis-1/3 flex-1 grid-cols-2 gap-8 px-4' alt='Nicholas Mamberger avatar'></img>
          
        </div>

          <p className='font-railway mt-1'>I am passionate about building excellent software that improves
            the lives of those around me. I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. What would you do if you had
            a software expert available at your fingertips?</p>
        
      </div>
    </div>
  );
};

export default About;


