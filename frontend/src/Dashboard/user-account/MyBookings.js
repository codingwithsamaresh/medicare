import React from 'react'
import useFetchData from '../../hooks/useFetchData.js'
import DoctorsCard from './../../components/Doctor/DoctorsCard.js'
import Loading from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'
import { BASE_URL } from '../../config.js'
import './MyBooking.css'

const MyBookings = () => {

  const {data: appointments , loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error &&(
        <div className='appointments'>
          {appointments.map(doctor =>(
            <DoctorsCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2>you did not book any doctor yet!</h2>
      )}
    </div>
  )
}

export default MyBookings