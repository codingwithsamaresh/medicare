import React,{useEffect, useState} from 'react'
import './FindADoctor.css'
import DoctorsList from '../../components/Doctor/DoctorsList.js'
import Testimonial from '../../components/Testimonial/Testimonial'
import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'
import DoctorsCard from '../../components/Doctor/DoctorsCard.js'

const FindADoctor = () => {
  const [query,setQuery] = useState(" ");

  const[debounceQuery, setDebounceQuery] = useState(" ");

  const handleSearch =()=>{
    setQuery(query.trim());
    console.log("handle search");
  }

  useEffect(() =>{
    
    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700);
    return ()=> clearTimeout(timeout);
  },[query]);

  const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);
  return (
    <>
      <section>
        <div className='doctor'>
          <div className='y'>
            <h2>Find a Doctor here</h2>
            <div className='search_bar'>
              <input type='search' placeholder='search doctor by name or specification' className='search-bar' value={query} onChange={e=> setQuery(e.target.value)} />
              <button onClick={handleSearch}>search</button>
            </div>
          </div>
        </div>
      </section>
      <section>
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error &&
            <div className='m'>
            {doctors.map(doctor => (
              <DoctorsCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          }
        
        <div className='testimonial'>
          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default FindADoctor