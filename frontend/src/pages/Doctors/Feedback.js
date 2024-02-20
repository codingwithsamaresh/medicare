import React, { useState } from 'react'
import './Feedback.css'
import avatar from '../../assets/Images/avatar-icon.png'
import { FormatDate } from '../../utils/FormatDate'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = ({reviews,totalRating}) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
    <div className='feed'>
      <div className='feedback'>
        <h4>All reviews({totalRating})</h4>
        {reviews?.map((reviews, index)=>(
          <div key={index} className='feeds'>
          <div className='feedbacks'>
            <img src={avatar} />
            <div>
              <h5>{reviews?.user?.name}</h5>
              <p>{FormatDate(reviews?.createdAt)}</p>
              <p>{reviews.reviewText}</p>
            </div>
          </div>
          <div className='rating'>
            {[...Array(reviews?.rating).keys()].map((_,index)=>(
              <AiFillStar key={index} color='#0067ff' />
            ))}
          </div>
        </div>
        ))}
      </div>
      {!showFeedbackForm && <div className='btn'>
        <button onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  )
}

export default Feedback