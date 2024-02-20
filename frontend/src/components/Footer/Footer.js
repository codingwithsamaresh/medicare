import React from 'react'
import { Link } from 'react-router-dom'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import './Footer.css'
import logo from '../../assets/Images/logo.png'

const socialLinks = [
  {
    path: "https://www.youtube.com/@codingwithSamaresh/featured",
    icon: <AiFillYoutube className='icon' />
  },
  {
    path: "https://github.com/codingwithsamaresh",
    icon: <AiFillGithub className='icon' />
  },
  {
    path: "https://www.instagram.com/samaresh_koley/",
    icon: <AiOutlineInstagram className='icon' />
  },
  {
    path: "www.linkedin.com/in/samareshkoley",
    icon: <RiLinkedinFill className='icon' />
  }
]

const quickLinks01 = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog"
  }
]

const quickLinks02 = [
  {
    path:"/doctor",
    display:"Find a Doctor"
  },
  {
    path:"/",
    display:"Request an Appointment"
  },
  {
    path:"/",
    display:"Find a Location"
  },
  {
    path:"/",
    display:"Get a Opinion"
  }
]

const quickLinks03 = [
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/contact",
    display:"Contact Us"
  }
]


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='footer'>
        <div className='z'>
          <div>
            <img src={logo} />
            <p>Copyright © {year} developed by samaresh Koley all rights reserved.</p>
            <div className='link'>
              {socialLinks.map((link,index)=>(
                <Link to={link.path} key={index} className='links'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className='quicklink'>
            <h2>Quick Links</h2>
            <Link to='/home' className='quicklinks'>Home</Link><br />
            <Link to='/home' className='quicklinks'>About Us</Link><br />
            <Link to='/home' className='quicklinks'>Services</Link><br />
            <Link to='/home' className='quicklinks'>Blog</Link>
          </div>
          <div className='quicklink'>
            <h2>I want to:</h2>
            <Link to='/doctor' className='quicklinks'>Find a Doctor</Link><br />
            <Link to='/' className='quicklinks'>Request an Appointment</Link><br />
            <Link to='/' className='quicklinks'>Find a Location</Link><br />
            <Link to='/' className='quicklinks'>Get a Opinion</Link>
          </div>
          <div className='quicklink'>
            <h2>Support</h2>
            <Link to='/home' className='quicklinks'>Donate</Link><br />
            <Link to='/home' className='quicklinks'>Contact Us</Link><br />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer