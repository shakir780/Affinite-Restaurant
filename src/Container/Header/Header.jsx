import React from 'react';
import SubHeading from '../../Components/Subheading/SubHeading';
import './Header.css'
import {images} from '../../constants'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding'>
        <div className="app__wrapper_info">
         
            <h1 className='app__header-h1'>An Elegant,Fine <br/ > Dinning Experience</h1>
           <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
            <form action="#">
                <h1>Book A Table</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name='user__name' />
                <label htmlFor="mail">Email:</label>
                <input type="email" id='mail' />
                <label htmlFor="phone">Phone Number:</label>
                <input type="number" id='phoneNumber' />
                <label htmlFor="Date" >Date</label>
                <input type="date" id='date' />
                <label htmlFor="time">Time</label>
                <input type="time" id='Time' />
                <button type='button'>Book Now</button>
            </form>
        </div>
    </div>
  )
}

export default Header