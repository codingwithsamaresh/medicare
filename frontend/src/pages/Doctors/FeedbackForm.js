import React, { useState } from 'react'
import './FeedbackForm.css'
import {AiFillStar} from 'react-icons/ai'
import {useParams} from 'react-router-dom'
import {BASE_URL, token} from '../../config.js'
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const FeedbackForm = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState("")
    const [loading, setLoading] = useState(false);
    const {id} = useParams()
    const handleSubmitReview = async e=>{
        e.preventDefault();
        setLoading(true);

        try{
            if(!rating || !reviewText){
                setLoading(false);
                return toast.error('Rating and review fields are required');
            }
            const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
                method: "post",
                headers: {
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                },
                body: JSON.stringify({rating,reviewText})
            })

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }
            setLoading(false);
            toast.success(result.message);
        }catch(err){
            setLoading(false);
            toast.error(err.message);
        }
    }
  return (
    <form action=''>
        <div>
            <h3>How would you rate the overall experience?*</h3>
            <div className='x'>
                {[...Array(5).keys()].map((_,index)=>{
                    index += 1;
                    
                    return(
                        <button key={index} type="button" className={`${index <= ((rating && hover) || hover) ? "rate" : "rates"} rating`} 
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        onDoubleClick={() => {
                            setHover(0);
                            setRating(0);
                        }}
                        >
                            <span><AiFillStar /></span>
                        </button>
                    );
                })}
            </div>
        </div>

        <div className='comments'>
            <h3>Share your feedback or suggestions*</h3>
            <textarea rows="5" placeholder='Write your message' onChange={e => setReviewText(e.target.value)}></textarea>
        </div>

        <button type='submit' onClick={handleSubmitReview} className='button'>
            {loading ? <HashLoader size={25} color='#fff' /> : "submit Feedback"}
            </button>
    </form>
  )
}

export default FeedbackForm