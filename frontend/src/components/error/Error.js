import React from 'react'

const Error = ({errMessage}) => {
  return (
    <div className='error'>
        <h3>{errMessage}</h3>
    </div>
  )
}

export default Error