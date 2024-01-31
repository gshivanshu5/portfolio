import React from 'react'
import "./about.scss"
import { BsInfoCircleFill } from 'react-icons/bs'
import Page from './page'
import { Animate } from 'react-simple-animate';
import { GrReactjs } from "react-icons/gr";
import { MdOutlineWeb } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    lable: "Name:",
    value: "Shivanshu Kr Gupta",
  },
  {
    lable: "Age:",
    value: "22",
  },
  {
    lable: "Address:",
    value: "Bargarh, Chitrakhoot (UP)",
  },
  {
    lable: "Email:",
    value: "gkshivanshu@gmail.com",
  },
  {
    lable: "Contact No:",
    value: "+91 6200655677",
  }
];

const about = "Highly motivated aspiring web developer seeking opportunities to utilize strong programming skills and passion for problem-solving. Proficient in multiple programming languages and frameworks, with a strong understanding of web development principles. Eager to contribute to innovative projects and collaborate with talented teams. Open to learning new technologies and continuously improving coding abilities."

export default function About() {
  return (
    <div className='about' id='about'>
      <Page headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className='content'>
        <div className='personal'>
          <h3>Web Developer</h3>
          <p>
            {about}
          </p>

          <Animate
            play
            duration={0.5}
            delay={0.5}
            start={{
              transform: "translateX(-320px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className='info'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.lable}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
              <li>
                <span className='title'>GitHub:</span>
                <span className='value top'><a href="https://github.com/gshivanshu5" target='blank'>https://github.com/gshivanshu5</a></span>
              </li>
              <li>
                <span className='title'>LinkedIn:</span>
                <span className='value top'><a href="https://www.linkedin.com/in/shivanshu-kr-gupta/" target='blank'>https://www.linkedin.com/in/shivanshu-kr-gupta/</a></span>
              </li>
            </ul>
          </Animate>
        </div>
        <div className='services'>
          <div className='innerServices'>
            <div>
              <GrReactjs size={60} color='var=(--yellow-theme-main-color)' />
            </div>
            <div>
              <MdOutlineWeb size={60} color='var=(--yellow-theme-main-color)' />
            </div>
            <div>
              <TbBrandJavascript size={60} color='var=(--yellow-theme-main-color)' />
            </div>
            <div>
              <FaDatabase size={60} color='var=(--yellow-theme-main-color)' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
