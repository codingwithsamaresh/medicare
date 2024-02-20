import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='Contact'>
        <h2>Contact Us</h2>
        <p>Got a technical issue?Want to send feedback about a beta feature?Let us know.</p>
        <form action='#'>
          <div className='z'>
            <label htmlFor='email'>Your Email</label>
            <input 
            type='email'
            id='email'
            placeholder='example@example.com'
            className='email'
            />
          </div>
          <div className='z'>
            <label htmlFor='email'>Subject</label>
            <input 
            type='text'
            id='Subject'
            placeholder='Let us know how we can help you'
            className='email'
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact