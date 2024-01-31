import React from 'react'
import './page.scss'

export default function Page(props) {

    const { headerText, icon } = props;
    return (
        <div className='wrapper'>
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}