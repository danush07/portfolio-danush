import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { EnvelopeIcon, MapIcon, PhoneIcon} from '@heroicons/react/24/solid'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
  
type Props = {}

function Contact({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {window.location.href = `mailto:danushhari2001@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message } (${formData.email})`};
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-xl'>
            Contact Me

        </h3>
        <div className='flex flex-col space-y-10'>
            
            <div className='space-y-10'>
                <div className='items-center flex space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] h-5 w-5 animate-pulse' />
                    <p className='text-2xl'>+91 9600766543</p>

                </div>
                <div className='items-center flex space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>danushhari2001@gmail.com</p>

                </div>
                <div className='items-center flex space-x-3  justify-center'>
                    <MapIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>Coimbatore,TamilNadu
                    
                    
                    </p>

                </div>
                
            
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2  w-screen md:w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')}placeholder='Name'className='contactInput' type="text" />
                    <input {...register('email')}placeholder='E-mail'className='contactInput' type="text" />
                
                </div>

                <input {...register('subject')} placeholder='Subject'className='contactInput' type="text">
                </input>
                <textarea {...register('message')}placeholder='Message'className='contactInput' />
        <button className='bg-[#f7ab0a] animate-pulse'>Submit</button>
            </form>

        </div>
    </div>
    </div>
  )
}

export default Contact