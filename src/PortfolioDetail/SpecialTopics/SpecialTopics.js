import React from 'react'
import './SpecialTopics.css'
import ECE594U from './ECE594U'
import MATRL290 from './MATRL290'

function SpecialTopics() {
  return (
    <>
    <div className='specialTopics'>
        <hr/>
        <h1>Special Topics</h1>
        <ECE594U/>
        <MATRL290/>
    </div>
    </>
  )
}

export default SpecialTopics