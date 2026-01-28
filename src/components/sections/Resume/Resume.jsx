import React from 'react'
import Education from './Education'
import WorkHistory from './WorkHistory'

export default function Resume() {
  return (
    <div className='px-6 lg:px-10 w-full h-full  md:mt-24 lg:mt-38'>
        <h1 className="section_title"> Resume</h1>
               <div className='xl:w-[646px] h-full'>

          <Education/>
           <WorkHistory/>
               </div>
    </div>
  )
}
