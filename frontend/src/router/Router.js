import React from 'react'
import Home from '../pages/Home/Home'
import FindADoctor from '../pages/Doctors/FindADoctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Services from '../pages/Services/Services'
import Contact from '../pages/Contact/Contact'
import {Routes, Route} from 'react-router-dom'
import MyAccount from '../Dashboard/user-account/MyAccount.js'
import Dashboard from '../Dashboard/doctor-account/Dashboard.js'
import ProtectedRoute from './ProtectedRoute.jsx'
import CheckoutSuccess from '../pages/CheckoutSuccess/checkoutSuccess.js'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/doctors' element = {<FindADoctor />} />
        <Route path='/doctors/:id' element = {<DoctorDetails />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<SignUp />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/services' element = {<Services />} />
        <Route path='/users/profile/me' element = {<ProtectedRoute allowedRoles={["patient"]}><MyAccount /></ProtectedRoute>} />
        <Route path='/doctors/profile/me' element = {<ProtectedRoute allowedRoles={["doctor"]}><Dashboard /></ProtectedRoute>} />
        <Route path='/checkout-success' element={<CheckoutSuccess />} />
    </Routes>
  )
}

export default Router