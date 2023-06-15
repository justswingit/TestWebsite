import React from 'react';
import './ResearchProjects.css';
import NakamuraSection from './NakamuraResearch';
import SFSUResearch from './SFSUResearch';


function ResearchProjects() {
  return (
    <>
      <div className='researchProjects'>
        <hr />
        <h1>Research Projects</h1>
      </div>
      <NakamuraSection />
      <SFSUResearch />
    </>
  )
}

export default ResearchProjects