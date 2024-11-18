import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container ml-6 mr-6'><h1 className ='text-4xlmd: text-5xl flex justify-center mb-10' data-aos="zoom-in-up">My Contact</h1>
    <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'data-aos="zoom-in-up">Get in tuch</h2>
            <p className='text-white text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, Give me a call, or send me amessage  by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <IoIosMail  size={30}/> sehrish786@gmail.com
            </div>
            <div className='flex gap-3 items-center ' data-aos="zoom-in-up">
              < BsFillTelephoneFill  size={30}/> (0312 2971071)
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='name'>Name</label>
            <input type='text'
            className='h-40px bg-transparent border border-blue-400'
            id='name'/>
          </div>
          
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='email'>Email</label>
            <input type='text'
            className='h-40px bg-transparent border border-blue-400'
            id='email'/>
          </div>
  
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='message'>Message</label>
           <textarea
          
            className=' bg-transparent border border-blue-400'
            id='message' rows={8}>
          </textarea>
          </div>
          <button className='bg-blue-400 p-2 px-6' data-aos="zoom-in-up">Sent</button>
         

        </div>
    </div>
</div>
    
  )
}

export default Contact