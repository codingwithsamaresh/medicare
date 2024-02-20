import React from 'react'
import { faqs } from '../../assets/data/faqs'
import FaqItem from './FaqItem'
import './FaqList.css'

const FaqList = () => {
  return (
    <ul className='faq'>
      {faqs.map((item,index)=>(
      <FaqItem item={item} key={index}  />
      ))}
    </ul>
  )
}

export default FaqList