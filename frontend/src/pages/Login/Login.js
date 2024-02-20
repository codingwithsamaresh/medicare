import React, { useState, useContext } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { BASE_URL } from '../../config.js'
import {toast} from 'react-toastify'
import { authContext } from '../../context/AuthContext.jsx'
import HashLoader from 'react-spinners/HashLoader'

const Login = () => {

  const [formData, setFormData] = useState({
    email: " ",
    password: "",
  });

  const {dispatch} = useContext(authContext);

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();
  
  const submitHandler = async event =>{
    event.preventDefault();
    setLoading(true);

    try{
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:"post",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
            });
        const result = await res.json();

        if(!res.ok){
          throw new Error(result.message);
        }

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: result.data,
            token: result.token,
            role: result.role,
          }
        });

        console.log(result , "login data");

        setLoading(false);
        toast.success(result.message);
        navigate('/home');

      
    }catch(err){
      toast.error(err.message);
      setLoading(false);
    }

  }

  return (
    <section className='Login'>
      <div className='sign'>
        <h3>Hello! <span>Welcome</span> back</h3>
        <form onSubmit={submitHandler}>
          <div className='signin'>
            <input
              type='email'
              placeholder='Enter your email address'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='email'
              required
            />
          </div>
          <div className='signin'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='email'
              required
            />
          </div>
          <div className='submit'>
            <button type='submit'>{loading ? <HashLoader size={25} color='#fff' /> :'Login'}</button>
          </div>
          <p>Don't have an account?
            <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login