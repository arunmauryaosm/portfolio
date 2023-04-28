import React from 'react'
import './Home.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Image from './profile.png'
import { SectionWrapper } from '../hoc';

const Home = () => {

        // Function will execute on click of button
        const onButtonClick = () => {
            // using Java Script method to get PDF file
            fetch('resume.pdf').then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'resume.pdf';
                    alink.click();
                })
            })
        }

  return (
    <div>
        <section className='home'>
            <div className='home_img'>
                <img src={Image} alt='profile_image' />
            </div>
            <div className='home_content'>

                <h3>Hello, It's Me</h3>
                <h1>Arun Maurya</h1>
                <h3>And I'm a <span>Web Developer</span></h3>
                <p></p>
                <div className='home_social_media'>
                    <a href='https://www.instagram.com/maurya_arun_' target='_blank' > <AiOutlineInstagram size={50}/></a>
                    <a href='https://www.linkedin.com/in/arun-maurya-647509200' target='_blank'> <AiFillLinkedin size={50}/></a>
                    <a href='https://github.com/arunmauryaosm' target='_blank'> <AiFillGithub size={50}/></a>
                </div>
                <button className='home_button' onClick={onButtonClick} >Download Resume</button>
            </div>
        </section>
    </div>
  )
}

export default SectionWrapper( Home, "home")
