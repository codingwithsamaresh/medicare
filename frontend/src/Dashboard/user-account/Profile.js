import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader.js';
import {toast} from 'react-toastify'
import { BASE_URL ,token } from '../../config.js';
import './Profile.css'



const Profile = ({user}) => {
  const [selectedFile , setSelectedFile] = useState(null);
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email: " ",
    password: "",
    gender: '',
    bloodType:"",
  });
  const navigate = useNavigate();

  useEffect(() =>{
    setFormData({name:user.name, email:user.email, gender:user.gender, bloodType:user.bloodType});
  },[user]);

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFileInputChange = async event =>{
    const file = event.target.files[0];


  };

  const submitHandler = async event =>{
    event.preventDefault();
    setLoading(true);

    try{
      const res = await fetch(`${BASE_URL}/users/${user._id}`,{
        method:"put",
        headers:{
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
            });
        const {message} = await res.json();

        if(!res.ok){
          throw new Error(message);
        }

        setLoading(false);
        toast.success(message);
        navigate('/users/profile/me');

      
    }catch(err){
      toast.error(err.message);
      setLoading(false);
    };

  };
  return (
    <div className='const'>
      <form onSubmit={submitHandler}>
              <div className='signin'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='email'
                  aria-readonly
                  readOnly

                />
              </div>
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
                 
                />
              </div>
              <div className='signin'>
                <input
                  type='text'
                  placeholder='Blood Type'
                  name='bloodType'
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className='email'
                  required
                />
              </div>
              <div className='option'>
                <label>Gender:
                  <select 
                  name='gender'
                  value={formData.gender}
                  onChange={handleInputChange}
                  >
                    <option value=''>select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </label>
              </div>
              <div className='submit'>
                <button disabled={loading && true} type='submit'>{loading ? <HashLoader size={30} color="#ffffff"/> :'Update'}</button>
              </div>
            </form>
    </div>
  )
}

export default Profile