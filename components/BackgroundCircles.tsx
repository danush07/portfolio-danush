import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale: [1,3],
        opacity: [0.1,0.2,0.4,1.0],
        borderRadius: ["20%","20%","50%"]
    }}
    transition={{
        duration:2.5

    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-red-600 rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
        <div className=' rounded-full border border-red-500 opacity-20 h-[300px] w-[300px] absolute mt-52 animate-spin'></div>
        <div className=' rounded-full border border-red-600 opacity-30 h-[400px] w-[400px] absolute mt-52 animate-spin'></div>
       
        
        <div></div>
    </motion.div>
  )
}

export default BackgroundCircles