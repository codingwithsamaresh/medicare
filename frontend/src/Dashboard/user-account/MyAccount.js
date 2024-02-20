import React, {useContext , useState} from 'react'
import {authContext} from './../../context/AuthContext.jsx'
import './MyAccount.css'
import avatar from '../../assets/Images/avatar-icon.png'
import Profile from './Profile.js'
import MyBookings from './MyBookings.js'
import useGetProfile from '../../hooks/useFetchData.js';
import {BASE_URL} from '../../config.js';
import Loading from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'
 
const MyAccount = () => {

  const {dispatch} = useContext(authContext);
  const handleLogout = () => {
    dispatch({type: "LOGOUT",});
  };
  const [tab,setTab] = useState("bookings");
  const {data: userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`);
  console.log(userData , "userdata");

  return (
    <section>
      <div className='container'>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className='grid'>
            <div className='padding'>
              <div className='account'>
                  <img src={avatar} />
                  <div className='text'>
                    <h3>{userData.name}</h3>
                    <p>{userData.email}</p>
                    <p>Blood Type:  <span>{userData.bloodType}</span></p>
                  </div>
                  <div className='button'>
                    <button onClick={handleLogout} className='btn-1'>Logout</button>
                    <button className='btn-2'>Delete Account</button>
                  </div>
              </div>
              
              
            </div>
            <div className='profile'>
              <div className='prof'>
                <button className={`${tab === "bookings" && "settings"} `}  onClick={() => setTab('bookings')}>My Bookings</button>
                <button className={`${tab === "settings" && "settings"} `} onClick={() => setTab('settings')}>Profile Settings</button>
              </div>
              {tab === "settings" && <Profile user={userData} />}
              {tab === "bookings" && <MyBookings />}
            </div>
          </div>
        )}
    </div>
    </section>
  )
}

export default MyAccount