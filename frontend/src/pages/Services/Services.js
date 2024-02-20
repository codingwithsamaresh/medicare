import React from 'react'
import {services} from './../../assets/data/services'
import ServiceCard from './ServiceCard' 
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  return (
    <section>
      <div className='container'>
      <div className='cards-container'>
        <div className='card'>
          <div>
            <img src='cancer.png' />
          </div>
          <div className='card_heading'>
            <h2>Cancer Care</h2>
          </div>
          <Link to='/doctors' className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='card'>
          <div>
            <img src='delivery.png' />
          </div>
          <div className='card_heading'>
            <h2>Labor & Delivery</h2>
          </div>
          <Link className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='card'>
          <div>
            <img src='Heart.jpg' />
          </div>
          <div className='card_heading'>
            <h2>Heart & Vascular</h2>
          </div>
          <Link className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
      <div className='cards-container'>
        <div className='card'>
          <div>
            <img src='mental.png' />
          </div>
          <div className='card_heading'>
            <h2>Mental Health</h2>
          </div>
          <Link to='/doctors' className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='card'>
          <div>
            <img src='neurologist.jpg' />
          </div>
          <div className='card_heading'>
            <h2>Neurology</h2>
          </div>
          <Link className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='card'>
          <div>
            <img src='burn.png' />
          </div>
          <div className='card_heading'>
            <h2>Burn Treatment</h2>
          </div>
          <Link className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services