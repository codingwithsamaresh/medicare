import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'
import './DoctorList.css'
import {BASE_URL} from './../../config.js'
import useFetchData from './../../hooks/useFetchData.js'
import Loader from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'

const DoctorList = () => {
  return (
    <div className='doctorList'>
      {doctors.map((doctor,index) =>(<DoctorCard key={doctor.id} doctor={doctor}/>))}
    </div>
  )
}

export default DoctorList