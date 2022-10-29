import React from 'react'
import { motion } from "framer-motion"
import {Skill} from "../typings"
import { urlFor } from '../sanity';
import Image from 'next/image'


type Props = {
    skill: Skill;
    directionLeft?: boolean
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <picture>
        <motion.img
            initial={{
                x:  directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{
                duration: 1,
            }}
            whileInView={{
                opacity:1, x: 0
            }}
            src={urlFor(skill?.image).url()} 
            
            className='object-contain w-20 h-20 flex-shrink-0 md:w-16 md:h-16 filter group-hover:black transition duration-300 ease-in-out' />
            </picture>

            <div className='absolute  opacity-0 transition group-hover:opacity-80 w-18 h-18 group-hover:bg-black md:w-18 md:h-18 ease-in-out z-0'>
            <div className='flex items-center justify-center'>
                    <p className='text-sm font-bold text-white text-center opacity-100'> {skill.progress}

                    </p>
                </div>

            </div>
            
    </div>

    
  )
}

export default Skill