import React from 'react'
import './DoctorsCard.css'
import starIcon from '../../assets/Images/star.png'
import { Link } from 'react-router-dom'


const DoctorsCard = ({doctor}) => {

    const {name, averageRating, totalRating , specialization, experiences} = doctor; 

  return (
    <div>
        <div className='c'>
            <h2>Dr. {name}</h2>
            <div className='n'>
                <h2>Specialization:</h2>
                {specialization}
            </div>
            <div className='t'>
                <h2>Rating:</h2><span>{averageRating}</span>
                <img src={starIcon} />
            </div>
            <Link to={`/doctors/${doctor._id}`} className='link'><i class="ri-arrow-right-line"></i></Link>
        </div>
    </div>
  )
}

export default DoctorsCard