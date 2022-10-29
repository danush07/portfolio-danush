import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { Project, Skill } from '../typings'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'



type Props ={
  projects: Project[];
  skills: Skill[];
};

const Home =({skills, projects}:Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] overflow-x-hidden text-white h-screen snap-y snap-mandatory overflow-scroll z-20 ">
      <Head>
        <title>Portfolio2.0</title>
      </Head>
      {/* header*/}
      <Header />
       {/* me*/}
       <section id="hero" className='snap-start'>
            <Hero />
       </section>
        {/* about*/}
        <section id="about" className='snap-center'>
              <About />
        </section>
         {/* skills*/}
         <section id='skills' className='snap-start'>
            <Skills
            skills={skills} />
         </section>
          {/* projects*/}
          <section id='projects' className='snap-start'>
            <Projects
            projects={projects} />
          </section>
           {/* contact */}
           <Contact />
           <section id='contact' className='snap-start'/>
          {/*special effect */}

            <Link href='#hero'>
              <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='flex items-center justify-center'>
                  <img className='h-10 rounded-full items-center justify-center filter grayscale hover:grayscale-0 cursor-pointer'
                    src='https://i.postimg.cc/8PnDRryV/Picsart-22-10-20-00-50-06-478.jpg'
                    alt=''
                  />
                </div>
              </footer>
            </Link>




     

    </div>
  )
}

export default Home;

export const getStaticProps : GetStaticProps<Props> = async() =>{
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  

  return{
    props: {
      projects,
      skills,
    }
  }
} 