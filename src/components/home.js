import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.scss';
import imgagee from "./cv-removebg-preview-removebg-preview.png"

export default function Home() {
  const navigate = useNavigate();
  const toContactPage = () => {
    navigate('/contact')
  }
  return (
    <div id='homePage'>
      <section id='home' className='home'>
        <div className='home_text'>
          <h1>Hello, I'm Shivanshu Kr Gupta <br /> <span>Web Developer</span></h1>
          <div className='space'>
            <button className='hire' onClick={toContactPage}>Hire Me</button>
            <img src={imgagee} alt="MyImage" className='imgae' />\
          </div>
        </div>
      </section>
    </div>
  )
}
