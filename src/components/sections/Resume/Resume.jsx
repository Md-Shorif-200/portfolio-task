import React from 'react'
import Education from './Education'
import WorkHistory from './WorkHistory'

export default function Resume() {
  return (
    <div className='px-10 w-full h-full'>
        <h1 className="section_title"> Resume</h1>
          <Education/>
           <WorkHistory/>
    </div>
  )
}
