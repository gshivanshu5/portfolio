import React from 'react'
import { useState } from 'react';
import ImageOne from './../images/image1.png';
import ImageTwo from './../images/image2.png';
import ImageThree from './../images/image3.png';
import Page from './page';
import { GoProjectSymlink } from "react-icons/go";
import './portfolio.scss'

const portfolioData = [
  {
    id: 2,
    name: "Portfolio",
    image: ImageOne,
    link: "/portfolio",
    describe: "Explore my dynamic portfolio crafted with React.js, showcasing a seamless blend of creativity and functionality in web development."
  },
  {
    id: 3,
    name: "News Blogging",
    image: ImageTwo,
    link: "https://github.com/gshivanshu5/ANews",
    describe: "Immerse yourself in the latest stories and breaking news with our dynamic ReactJS-powered News Blogging website. Experience seamless navigation and real-time updates for a cutting-edge news reading experience."
  },
  {
    id: 4,
    name: "Ecommerce Template",
    link: "https://gshivanshu5.github.io/ecommerceTemplate/",
    image: ImageThree,
    describe: "Sleek and responsive eCommerce template crafted with HTML, CSS, and JS, offering a seamless browsing experience and stylish design for online businesses."
  },
]
export default function Portfolio() {
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleHover(index) {
    setHoveredValue(index);
  }
  return (
    <div className='projects'>
      <Page headerText="My Projects" icon={<GoProjectSymlink size={40} />} />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
                <span>{item.describe}</span>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link}>
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
