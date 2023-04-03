import React from 'react'
import { Link } from 'react-router-dom'
import "./Topics.css"

const Topics = () => {
  return (
    <div className='topic-section'>
      <div className='col'>
        <Link to = "/PopQuiz" className='link'><div className='card'>
        <img className='image' src = "/popQuiz.jpeg" alt = "pop culture"></img>
        <p className='text'>Pop Culture</p>
        </div></Link>
      </div>

      <div className='col'>
        <Link to = "/India" className='link'><div className='card'>
        <img className='image' src = "/india.jpeg" alt = "India"></img>
        <p className='text'>India</p>
        </div></Link>
      </div>

      <div className='col'>
        <Link to = "/GK" className='link'><div className='card'>
        <img className='image' src = "/gk.jpeg" alt = "gk"></img>
        <p className='text'>General Knowledge</p>
        </div></Link>
      </div>
    </div>
  )
}

export default Topics