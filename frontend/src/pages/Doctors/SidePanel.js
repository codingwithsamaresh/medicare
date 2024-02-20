import React from 'react'
import './SidePanel.css'
import convertTime from '../../utils/convertTime.js'
import {BASE_URL,token} from './../../config.js'
import {toast} from 'react-toastify'
import {loadStripe} from '@stripe/stripe-js';



const SidePanel = ({doctorId, ticketPrice, timeSlots}) => {

  const bookingHandler = async()=>{
    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
        method:'post',
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      const data = await res.json();

      if(!res.ok){
        throw new Error(data.message + "Please try again");
      }

      if(data.session.url){
        window.location.href = data.session.url;
      }

    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className='panel'>
        <div className='content'>
            <p>Ticket Price:</p>
            <span>INR {ticketPrice}</span>
        </div>
        <div className='timing'>
          <p>Available Time Slots:</p>
          <ul>
            {timeSlots?.map((item,index)=>(
              <li key={index}>
                <p>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
                <p>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p>
            </li>
            ))}
            
          </ul>
        </div>
        <button onClick={bookingHandler}>Book Appointment</button>
    </div>
  )
}

export default SidePanel