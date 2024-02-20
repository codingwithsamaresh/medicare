import React, { useState } from 'react'
import Loader from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'
import { BASE_URL } from '../../config.js'
import useGetProfile from '../../hooks/useFetchData.js'
import './Tabs.js'
import './Dashboard.css'
import Tabs from './Tabs.js'
import doctorImg from '../../../src/assets/Images/doctor-img01.png'
import starIcon from '../../assets/Images/star.png'
import DoctorAbout from './../../pages/Doctors/DoctorAbout.js'
import Profile from './Profile.js'
import Appointments from './Appointments.js'


const Dashboard = () => {

  const {data , loading, error} = useGetProfile(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className='dash'>
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className='tabs'>
            <Tabs tab={tab} setTab={setTab} />
            <div className='board'>
              {data.isApproved === "pending" && 
              <div className='dashboard'>
                <h4>To get approval, please complete your profile. We will review manually and approve within 3 days.</h4>  
              </div>}
              <div className='tob'>
                {tab === "overview" && 
                <div className='ovarview'>
                  <div className='ovar'>
                    <img src={doctorImg} />
                    <div>
                      <div className='span'>{data.specialization}</div>
                      <h3>{data.name}</h3>
                      <div className='fig'>
                        <img src={starIcon} />
                        <span>{data.averageRating}</span>
                        <span>({data.totalRating})</span>
                      </div>
                      <p>{data?.bio}</p>
                  </div>
                  </div>
                  <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
                </div>}
                {tab === "appointments" && <Appointments appointments={data.appointments} />}
                {tab === "settings" && 
                <div className='settings'>
                  <Profile doctorData={data} /> 
                </div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Dashboard