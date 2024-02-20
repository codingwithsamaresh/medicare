import React from 'react'
import {Link} from 'react-router-dom'
import './checkoutSuccess.css'
import tick from '../../assets/Images/tick.png'

const checkoutSuccess = () => {
  return (
    <div className='L'>
        <div className='I'>
          <img src={tick} />
            <div className='N'>
                <h3>Payment Successful!</h3>
                <p>Thank you for completing secure online Payment.</p>
                <p>Have a great day!</p>
                <div>
                    <Link to='/home'>Go back to Home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default checkoutSuccess