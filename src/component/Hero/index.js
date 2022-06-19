import React from 'react'
import "./style.css"

const Hero = ({handleModalOpen}) => {
  return (
    <div className='hero-container'>
        <img src='https://raisingsuperstars.com/hosted/images/b0/af8dea2e41451c9ccedb220248edaa/Untitled-design-4-.png' alt='hero-img' />
        <div className='hero-content'>
            <h2>
            Awaken your baby's hidden geniuses, potential & talent
            </h2>
            <h4>
            Unlock unbelievable & miraculous results with just 5 daily minutes.. without any pressure or screentime for baby
            </h4>
            <button onClick={handleModalOpen}>
                Explore Comments
            </button>
        </div>
    </div>
  )
}

export default Hero