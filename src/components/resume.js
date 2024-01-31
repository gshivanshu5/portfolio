import React from 'react'
import Page from './page'
import { FaBlackTie } from "react-icons/fa";
import { data } from './education';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import './resume.scss';
import { MdWork } from 'react-icons/md';

export default function Resume() {
  return (
    <div id='education'>
      <Page headerText="My Education" icon={<FaBlackTie size={40} />} />
      <div className='edu'>
        <div className='timeLine'>
          <VerticalTimeline
            layout={'1-column'}
            linColor='var(--yellow-theme-main-color)'
          >
            {
              data.Education.map((item, i) => (
                <VerticalTimelineElement
                  key={i} className='timeLineElement'
                  contentStyle={{
                    background: 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border: "1.5px solid var(--yellow-theme-main-color)",
                    boxShadow : "none"
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--yellow-theme-main-color)"
                  }}
                >
                  <div>
                    <h3>{item.title}</h3>
                    <h4>
                      {item.college}
                    </h4>
                  </div>
                  <p>{item.CGPA}</p>
                  <p>{item.date}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}
