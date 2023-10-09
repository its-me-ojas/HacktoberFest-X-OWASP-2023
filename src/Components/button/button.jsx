import React, {Component} from 'react'
import './button.css'

const MyButton = (props) => {
    return (
        <a href={props.link} className='button'>
            {props.children}
        </a>
    )
}

export default MyButton