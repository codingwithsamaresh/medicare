import React from 'react'
import { useState } from 'react'
import './FaqItem.css'

const FaqItem = ({item}) => {

  const [isOpen, SetIsOpen] = useState(false)

  const toggleAccordion = () =>{
    SetIsOpen(!isOpen)
  }

  return (
    <div className='faq_item'>
      <div className='faq-item' onClick={toggleAccordion}>
        <h4>{item.question}</h4>
        <div className='faqs'>
           {isOpen ? <i class="ri-subtract-fill"></i> : <i class="ri-add-line"></i> }
        </div>
      </div>
      {isOpen &&(
        <div className='ans'>
          <p className='para'>{item.content}</p>
        </div>
      )}
    </div>
  )
}

export default FaqItem