import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import DoctorList from '../../components/Doctor/DoctorList'
import FaqList from '../../components/FAQ/FaqList'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
    <div className='hero_section'>
      <div className='container'>
        <div className='inner_container'>
          <div>
            <div className='text'>
              <h1>We help patients to live Healthy,Longer Life</h1>
              <p>Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 120 countries.Apollo Group constitutes the best hospital in India with over 10,000 beds across 73 hospitals, 5000+ pharmacies, over 300 clinics, 1100+ diagnostic centres and 200+ Telemedicine units.</p>
              <div className='btn'>
                <Link className='button' to='/'>Request an Appointment</Link>
              </div>
            </div>
            <div className='inn_con'>
              <div>
                <h2>30+</h2>
                <span className='yellow'></span>
                <p>Years of Experience</p>
              </div>
              <div>
                <h2>15+</h2>
                <span className='purple'></span>
                <p>Clinic Locations</p>
              </div>
              <div>
                <h2>100%</h2>
                <span className='iris'></span>
                <p>Patient Satisfaction</p>
              </div>

            </div>
          </div>
          <div className='right_div'>
            <div className='rt'>
              <img  src='hero-img01.png' />
            </div>
            <div className='r'>
              <img src='hero-img02 (1).png' />
              <img src='hero-img03.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section >
      <div className='features'>
        <div className='feature'>
          <h2>Providing the best medical services</h2>
          <p>World-class care for everyone.Our healthCare system offers offers unmatched,expert healthcare.</p>
        </div>  
      </div>
      <div className='cards-container'>
        <div className='card'>
          <div>
            <img src='icon01.png' />
          </div>
          <div className='card_heading'>
            <h2>Find a Doctor</h2>
          </div>
          <Link to='/doctors' className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='card'>
          <div>
            <img src='icon02.png' />
          </div>
          <div className='card_heading'>
            <h2>Find a Location</h2>
          </div>
          <Link className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='card'>
          <div>
            <img src='icon03.png' />
          </div>
          <div className='card_heading'>
            <h2>Book Appointment</h2>
          </div>
          <Link className='link'>
            <i class="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
    <section>
      <div className='about'>
        <div className='container'>
          <div className='about_img'>
            <img src='about.png' />
            <div className='about_card'>
              <img src='about-card.png' />
            </div>
          </div>
          <div className='about_content'>
            <h2>Proud to be One of the Nation's Best</h2>
            <p className='first_para'>{" "}
            For 30 years in a row, MHRD,India Health Report has recognized us
            one of the best public hospitals in India and #1 in West Bengal.Our
            team of over 11000 doctors will try to give you the best of modern
            healthcare to stay you healthy,always. Innovations is a research arm
            of the group which is involved in clinical trials of drugs, medical
            devices, healthcare software and consumer products. It was
            established in 2000 and has 17 centres at hospital locations.{" "}</p>
            <p className="second_para">
            {" "}
            Our best is something we strive for each day,caring for our
            patients-not looking back at what we have accomplished but towards
            what we can tomorrow.We are trying to provide the best healthcare
            system for you.Offering numerous services, MedPlus HealthCare
            Kolkata treats patients with utmost care and with its roster of best
            doctors in Kolkata, this hospital is one of the few in the city with
            such a huge number of specialities.
          </p>
          <div className='btn'>
            <Link className='button' to= '/'>Learn More</Link>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='services'>
        <div className='container'>
          <h2>Our Medical Services</h2>
          <p>World-class care for everyone.Our healthcare system offers
            unmatched,expert healthcare.</p>
        </div>
      </div>
      <div className='service'>
          <div className='cards'>
            <h2>Cancer Care</h2>
            <Link to='/doctors' className='link'>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='cards'>
            <h2>Labor & Delivery</h2>
            <Link to='/doctors' className='link'>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='cards'>
            <h2>Heart & Vascular</h2>
            <Link to='/doctors' className='link'>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='cards'>
            <h2>Mental Health</h2>
            <Link to='/doctors' className='link'>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='cards'>
            <h2>Neurology</h2>
            <Link to='/doctors' className='link'>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='cards'>
            <h2>Burn Treatment</h2>
            <Link to='/doctors' className='link'>
              <i class="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
    </section>
    <section>
      <div className='feature'>
        <div className='container'>
          <div className='left_con'>
            <h2>Get Virtual Treatment <br /> Anytime.</h2>
            <ul className='list'>
              <p>1. Schedule the appointments directly.</p>
              <p>2. Search for your physician here, and contact their office.</p>
              <p>3. View our physicians who are accepting new patients , use their online scheduling tool to select an appointment time,</p>
            </ul>
            <div className='btn'>
                <Link className='button' to='/'>Learn More</Link>
              </div>
          </div>
          <div className='right_div'>
            <img src='feature-img.png' />
            <div className='box'>
              <div className='inner_box'>
                <div className='inn_box'>
                  <p>Tue,24</p>
                  <p>10:00 AM</p>
                  <span>
                    <img src='video-icon.png' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='doctors'>
        <div className='container'>
          <h2>Our Experienced Doctors</h2>
          <p>
            World-class care for everyone.Our healthcare system offers
            unmatched,expert healthcare.
          </p>
        </div>
        <DoctorList />
      </div>
    </section>
    <section>
      <div className='faq'>
        <div className='container'>
          <div className='left_div'>
            <img src='faq-img.png' />
          </div>
          <div className='right_div'>
            <h2>Most asked questions by our Beloved Patients</h2>
            <div className='faqlist'>
              <FaqList />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='testimonial'>
        <div className='container'>
          <h2>What Our Patients Say</h2>
          <p>
            World-class care for everyone.Our healthcare system offers
            unmatched,expert healthcare.
          </p>
        </div>
        <Testimonial />
      </div>
    </section>
    </>
  )
}

export default Home