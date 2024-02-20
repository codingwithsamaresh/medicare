import React from 'react'

const ServiceCard = ({item,index}) => {

    const {name, desc, bgColor, textColor} = item;

  return (
    <div className='service'>
        <h2>{name}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard