import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:'Tina ',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit obcaecati optio doloremque doloribus minus magni in minima alias pariatur."
  },
  {
    avatar:AVTR2,
    name:'John',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit obcaecati optio doloremque doloribus minus magni in minima alias pariatur."
  },
  {
    avatar:AVTR3,
    name:'Micheal ',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit obcaecati optio doloremque doloribus minus magni in minima alias pariatur."
  },
  {
    avatar:AVTR4,
    name:'Monica',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit obcaecati optio doloremque doloribus minus magni in minima alias pariatur."
  },
]

const Testimonials = () => {
  return (
    <section className='app__bg app__wrapper section__padding' id='testimonials'>
      {/* <h5>Review from clients</h5>
      <h2>Testimonials</h2> */}
      <Swiper className="app__wrapper_info"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
    
      >
       {
         data.map(({avatar,name,review}, index)=>{
           return(
            <SwiperSlide key={index} className="testimonial">
                 <h1 className="headtext__cormorant">What Our Diner Say</h1>
                  
                <div className="app__testimonial-contents">
                <div className="client__avatar">
              <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className='client__name'>{name}</h5>
               <div className="client__review">
               <p className='p__opensans review'>{review}</p>
               </div>
              

                </div>
                 
           
             
            
            
             
              </SwiperSlide>
           )
         })
       }
      
       
      </Swiper>
    </section>
  )
}

export default Testimonials