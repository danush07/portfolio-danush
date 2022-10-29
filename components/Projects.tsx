import React from 'react'
import { motion } from "framer-motion"
import {Project} from "../typings"
import { urlFor } from '../sanity';
import Image from 'next/image'
type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
    Projects
    </h3>
    <div className='scrollbar-hide relative  w-full flex overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory'>
      {projects?.map((project, i) => (
        <div 
        key={project._id}
        className='w-screen snap-center flex flex-col flex-shrink-0 space-y-5 items-center justify-evenly p-20 md:p-44 h-screen '>
          <motion.img
          initial={{
            y:-300,
            opacity: 0
          }} 
          transition={{duration:1.2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          
          
          className='object-contain h-60 w-70 flex-shrink-0' src={urlFor(project?.image).url()} >

          </motion.img>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'> <h4 className='text-4xl font-semibold text-center'>Projects {i+1} of {projects.length} :  {project?.title}</h4></div>
            <p className='text-lg text-center md:text-left'>
          
            {project?.summary}
            </p>
        </div>
        
      ))}

    </div>
   




    <div className='w-full absolute top-[35%]  bg-[#f7ab0a]/30 left-0 h-[200px] -skew-y-12'>

    </div>
    </motion.div>
  )
}

export default Projects