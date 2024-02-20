import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const loading = () => {
  return (
    <div className='loading'>
        <HashLoader color='#0067ff' />
    </div>
  )
}

export default loading