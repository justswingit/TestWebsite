import React from 'react'
import './FeaturedClasswork.css'
import Phys123A  from './Phys123A'
import Phys123B  from './Phys123B'
import Phys141   from './Phys141'
import Phys127AL from './Phys127AL'
import SeniorLab from './SeniorLab'

function FeaturedClasswork() {
  return (
    <>
    <div className='featuredClasswork'>
        <hr/>
        <h1>Featured Classwork</h1>
        <Phys123A />
        <Phys123B />
        <Phys141  />
        <Phys127AL/>
        <SeniorLab/>
    </div>
    </>
  )
}

export default FeaturedClasswork