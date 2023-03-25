import React, { useState } from 'react';


// const axios =require('axios');
const Contact = () => {
  const [formState, setFormState] = useState({
    name: '', email: '', message: ''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log(formState)
    };
  };

  const handleChange = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required`);
      setFormState({ ...formState, [e.target.name]: `${e.target.name} is required`});
    }
    else {
      setErrorMessage('')
    };
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }

  }
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST'  action="https://getform.io/f/84daa07e-1c8c-4197-9772-d31122915631" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-700 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - nhmamberger@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" name='name' placeholder={name} onBlur={handleChange} />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name='email' placeholder={email} onBlur={handleChange} />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder={message} onBlur={handleChange}></textarea>
        <button type='submit' className='text-white border-2 hover:bg-red-700 hover:border-red-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
//mailto:nhmamberger@gmail.com?subject=subject&body=body