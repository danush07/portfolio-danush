import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
         
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        About
        </h3>
        <motion.img className='-mb-20 sm:mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  sm:rounded-full md:rounded-lg md:w-64 md:h-96 xl:h-[600px] xl:w-[500px]'
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{
            once:true
        }}
        src='https://i.postimg.cc/6qb9kfCd/4726-removebg-preview-2.png'>
        </motion.img>
        <div className='space-y-10 px-0 md:px-10 '>
                <h4 className='text-4xl md:px-10 font-semibold'>
                Get to know More about Me !

                </h4>
                <p className='text-base'>
                I am Looking for an Entry level position👨‍💻to kick start my career,
                I wish to work in a Dynamic Organization🏢 that will contribute to
                My Professional and Personal development 📈 while I contribute to
                the Growth of the Company as well as engage in Opportunities to
                Fulfill the Company Objectives 🎯
                </p>
        </div>
        </motion.div>
  )
}

export default About