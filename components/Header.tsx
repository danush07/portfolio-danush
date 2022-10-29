import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"
import Link from 'next/link'


type Props = {

}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center text-white'>
    <motion.div
    initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
    }}
    animate={{
        x:0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration:1,

    }}
     className='flex flex-center animate-pulse  items-center '>
       
 <SocialIcon 
             url='https://www.linkedin.com/in/danushhari-83a9731b5/'
             fgColor='white'
             bgColor='transparent' />
<SocialIcon 
             url='https://github.com/danush07'
             fgColor='white'
             bgColor='transparent' />

<SocialIcon 
             url='https://www.youtube.com/channel/UCxYETSha0PBSw65qKtaM3_g'
             fgColor='white'
             bgColor='transparent' />



    </motion.div>
    <Link href='#contact'>
    <motion.div
     initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
    }} 
    animate={{
        x:0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration:1,

    }}
    className='flex flex-row items-center text-white cursor-pointer'>
        <SocialIcon className='animate-pulse  cursor-pointer'fgColor='white' bgColor='transparent' network='email'/>
        <p className='uppercase hidden md:inline-flex text-sm font-serif text-white'> Get in touch

        </p>

    </motion.div>
    </Link>
    </header>
  )
}