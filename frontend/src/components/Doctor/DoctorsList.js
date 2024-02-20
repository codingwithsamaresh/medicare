import React from 'react'
import DoctorsCard from './DoctorsCard'
import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'

const DoctorsList = () => {
  const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctors`);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error &&
        <div className='m'>
          {doctors.map(doctor => (
            <DoctorsCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      }
    </>
  )
}

export default DoctorsList