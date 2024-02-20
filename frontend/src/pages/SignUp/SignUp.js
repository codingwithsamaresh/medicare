import React, {useState} from 'react'
import './SignUp.css'
import SignupImg from '../../assets/Images/signup.gif'
import avatar from '../../assets/Images/doctor-img01.png'
import { Link , useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config.js'
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const SignUp = () => {

  const [selectedFile , setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email: " ",
    password: "",
    photo:selectedFile,
    gender: '',
    role: 'patient'
  });
  const navigate = useNavigate();

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
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:"post",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
            });
        const {message} = await res.json();

        if(!res.ok){
          throw new Error(message);
        }

        setLoading(false);
        toast.success(message);
        navigate('/login');

      
    }catch(err){
      toast.error(err.message);
      setLoading(false);
    };

  };

  return (
    <section className='sign'>
      <div className='signup'>
        <div className='Sign'>
          <div className='Signup'>
            <img src={SignupImg} />
          </div>
          <div className='form'>
            <h3>Create an Account</h3>
            <form onSubmit={submitHandler}>
              <div className='signin'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='email'
                  required
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
                  required
                />
              </div>
              <div className='option'>
                <label>Are you a
                  <select 
                  name='role'
                  value={formData.role}
                  onChange={handleInputChange}
                  >
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                  </select>
                </label>
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
                <button disabled={loading && true} type='submit'>{loading ? <HashLoader size={30} color="#ffffff"/> :'Register'}</button>
              </div>
              <p>Already have an account?
               <Link to='/login'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp