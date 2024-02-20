import React,{useContext} from 'react'
import {authContext} from './../../context/AuthContext.jsx'
import {useNavigate} from 'react-router-dom'
import './Tabs.css'

const Tabs = ({tab , setTab}) => {

  const {dispatch} = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({type: "LOGOUT",});
    navigate('/');
  };

  return (
    <div>
      <div className='tab'>
        <button onClick={()=>setTab("overview")} className={`${tab==="overview" ? "over" : "view"}`}>Overview</button>
        <button onClick={()=>setTab("appointments")} className={`${tab==="appointments" ? "over" : "view"}`}>Appointments</button>
        <button onClick={()=>setTab("settings")} className={`${tab==="settings" ? "over" : "view"}`}>Profile</button>
        <button onClick={handleLogout} className='btn-1'>Logout</button>
        <button className='btn-2'>Delete Account</button>
      </div>
    </div>
  )
}

export default Tabs