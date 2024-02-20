import React from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {HiStar} from 'react-icons/hi'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='test'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination = {{clickable:true}}
        breakpoints={{
          640:{
            slidesPerView:1,
            spaceBetween:0,
          },
          768:{
            slidesPerView:2,
            spaceBetween:20,
          },
          1024:{
            slidesPerView:3,
            spaceBetween:30 
          },
        }}
        >
          
            <SwiperSlide>
              <div className='swipe'>
                <div className='swper'>
                  <img src='patient-avatar.png' />
                  <h4>Muhibur Rahman</h4>
                  <div className='swp'>
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                  </div>
                </div>
                <p>"I have taken medical services from them.They treat so well and they are providing the best medical services."</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swipe'>
                <div className='swper'>
                  <img src='patient-avatar.png' />
                  <h4>Maksedul Rahman</h4>
                  <div className='swp'>
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                  </div>
                </div>
                <p>"I have taken medical services from them.They treat so well and they are providing the best medical services."</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swipe'>
                <div className='swper'>
                  <img src='patient-avatar.png' />
                  <h4>Pulak Kumar Ghosh</h4>
                  <div className='swp'>
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                  </div>
                </div>
                <p>"I have taken medical services from them.They treat so well and they are providing the best medical services."</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swipe'>
                <div className='swper'>
                  <img src='patient-avatar.png' />
                  <h4>Saif Raj</h4>
                  <div className='swp-1'>
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                  </div>
                </div>
                <p>"I have taken medical services from them.They treat so well and they are providing the best medical services."</p>
              </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial