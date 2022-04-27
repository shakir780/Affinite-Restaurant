import React from 'react'
import {images} from '../../constants';

import './AboutUS.css'
const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
        
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={images.spoon} alt="fork__image" className='fork__img' />
                <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Eaque Placeat Officia Natus, Iure Voluptatum Expedita Quis Cumque Id Assumenda, Dolorem Praesentium Ex Voluptatibus Dolor Hic Sequi Veniam Maiores Deleniti Asperiores.</p>
                
                {/* <button type='button' className='custom__button'>Know More</button> */}
                
            </div>
         
      
      <div className="app__aboutus-content_knife flex__center">
          <img src={images.forkandknife} alt="about_forkandknife" />
      </div>

     
            <div className="app__aboutus-content_history">
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={images.spoon} alt="fork__image" className='fork__img' />
                <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat officia natus, iure voluptatum expedita quis cumque id assumenda, dolorem praesentium ex voluptatibus dolor hic sequi veniam maiores deleniti asperiores.</p>
               {/* <button type='button' className='custom__button'>Know More</button> */}
            </div>
        </div>

    

    </div>
  )
}

export default AboutUs