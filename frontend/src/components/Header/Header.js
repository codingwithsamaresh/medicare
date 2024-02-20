import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useEffect,useRef ,useContext} from 'react'
import './Header.css'
import 'remixicon/fonts/remixicon.css'
import logo from '../../assets/Images/logo.png'
import { authContext } from '../../context/AuthContext.jsx'

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user, role, token} = useContext(authContext);

  const handleStickyHeader = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() =>{
    handleStickyHeader()
    return ()=>window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  
  return (
    <div className='head' ref={headerRef}>
      <div className='header'>
        <div className='h'>
          <img src={logo} />
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='pages' >
              <NavLink className='link' to="/">Home</NavLink>
              <NavLink className='link' to="/services">Services</NavLink>
              <NavLink className='link' to="/doctors">Find a Doctor</NavLink>
              <NavLink className='link' to="/contact">Contact Us</NavLink>
            </div>
          </div>
          <div className='right'>
            {
              token && user ? 
              <div className='userImg'>
              <Link className='link' to = {`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me' }`}>
                <img src='avatar-icon.png' />
                <h1>{user?.name}</h1>
              </Link>
            </div> : <Link className='login' to = "/login">Login</Link>
            }
            
            <div onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  )
}

export default Header