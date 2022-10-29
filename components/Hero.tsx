import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello There !","I'm Danush Hari : )"],
        loop:true,
        delaySpeed:2000,
      })
  return( 
    <div className='h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://i.postimg.cc/8PnDRryV/Picsart-22-10-20-00-50-06-478.jpg" />
        <div className='z-20'>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
        <span>{text}</span>
            <Cursor cursorColor='white' />
        </h1>
        <div className='pt-5 '>
            <Link href="#about">
            <button className='cursor-pointer herobutton'> About </button>
            </Link>
            <Link href="#skills">
            <button className='cursor-pointer herobutton'> Skills</button>
            </Link>
            <Link href="#projects">
            <button className='cursor-pointer herobutton'> Projects </button>
            </Link>

            </div>
        </div>
  </div>
  )
}