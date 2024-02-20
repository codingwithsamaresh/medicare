import React from 'react'
import './DoctorCard.css'
import {Link} from 'react-router-dom'




const DoctorCard = ({doctor}) => {

  const {name,avgRating, totalRating,photo,specialization,totalPatients,hospital,id} = doctor;

  const Id = {id};

  return (
    <div className='doctorcard'>
      <div className='photo'>
        <img src={photo} />
      </div>
      <h2>{name}</h2>
      <div className='special'>
        <span className='specialization'>
          {specialization}
        </span>
        <span className='star'>
          <img src='star.png' />{avgRating}
        </span>
        <span>({totalRating})</span>
      </div> 
      <div className='patient'>
        <h3>+{totalPatients} patients</h3>
        <p>at {hospital}</p>
        <Link to='/doctors' className='link'><i class="ri-arrow-right-line"></i></Link>
      </div>
    </div>
  )
}

export default DoctorCard