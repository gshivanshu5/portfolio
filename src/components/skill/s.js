import { Line } from "rc-progress";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { AnimateKeyframes } from "react-simple-animate";
import Page from "../page";
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Page
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        key={skillItem}
                        percent={skillItem.percentage}
                        strokeWidth="3"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="3"
                        strokeLinecap="square"
                      />
                      <p>{skillItem.percentage}%</p>
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;