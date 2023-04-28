import React from 'react'
import { SectionWrapper } from '../hoc'
import { FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5} from 'react-icons/io';
import { SiFirebase, SiTailwindcss, SiNextdotjs} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { TbApi } from 'react-icons/tb';
import { DiMongodb, DiNodejs } from 'react-icons/di';



const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-16'>
      <div className='flex-col  '>
      <IoLogoHtml5 size={80}/>
      <p className='flex justify-center'>HTML</p>
      </div>
      <div className='flex-col  '>
      <IoLogoCss3 size={80}/>
      <p className='flex justify-center'>CSS</p>
      </div>
      <div className='flex-col  '>
      <IoLogoJavascript size={80}/>
      <p className='flex justify-center'>JavaScript</p>
      </div>
      <div className='flex-col  '>
      <FaReact size={80}/>
      <p className='flex justify-center'>React.js</p>
      </div>
      <div className='flex-col  '>
      <DiMongodb size={80}/>
      <p className='flex justify-center'>MongoDB</p>
      </div>
      <div className='flex-col  '>
      <DiNodejs size={80}/>
      <p className='flex justify-center'>Node.js</p>
      </div>
      <div className='flex-col  '>
      <SiNextdotjs size={80}/>
      <p className='flex justify-center'>Next.js</p>
      </div>
      <div className='flex-col  '>
      <SiFirebase size={80}/>
      <p className='flex justify-center'>Firebase</p>
      </div>
      <div className='flex-col  '>
      <FaBootstrap size={80}/>
      <p className='flex justify-center'>Bootstrap</p>
      </div>
      <div className='flex-col  '>
      <SiTailwindcss size={80}/>
      <p className='flex justify-center'>Tailwind CSS</p>
      </div>
      <div className='flex-col  '>
      <FaJava size={80}/>
      <p className='flex justify-center'>JAVA</p>
      </div>
      <div className='flex-col  '>
      <AiFillGithub size={80}/>
      <p className='flex justify-center'>Github</p>
      </div>
      <div className='flex-col  '>
      <TbApi size={80}/>
      <p className='flex justify-center'>Rest API</p>
      </div>


    </div>
  )
}

export default SectionWrapper(Tech, 'tech')
