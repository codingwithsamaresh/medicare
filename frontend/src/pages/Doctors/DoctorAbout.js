import React from 'react'
import './DoctorAbout.css'
import { FormatDate } from '../../utils/FormatDate'

const DoctorAbout = ({name,about,qualifications,experiences}) => {
  return (
    <div className='About'>
      <div>
        <h3>About of <span>{name}</span></h3>
        <p>
        {about}
        </p>
      </div>
      <div className='education'>
        <h3>Education</h3>
        <ul className='list'>
          {qualifications?.map((item,index)=>
          <li key={index} className='List'>
          <div>
            <span>{FormatDate(item.startingDate)} - {FormatDate(item.endingDate)}</span>
            <p>{item.degree}</p>
          </div>
          <p>{item.university}</p>
        </li>
          )}

          
        </ul>
      </div>

      <div className='experience'>
        <h3>Experience</h3>
        <ul className='ex'>
          {experiences?.map((item,index)=>(
            <li key={index} className='exp'>
            <span>{FormatDate(item.startingDate)} - {FormatDate(item.endingDate)}</span>
            <p>{item.position}</p>
            <p>{item.hospital}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout