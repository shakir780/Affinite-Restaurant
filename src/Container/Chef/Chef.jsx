import React from 'react'
import SubHeading from '../../Components/Subheading/SubHeading'
import { images } from '../../constants'
import './Chef.css'
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef__image" />
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Chef's word"/>
            <h1 className="headtext__cormorant">Our Belief</h1>
            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote_image" />
                    <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere dolorum molestiae ab expedita doloribus magni, perspiciatis soluta voluptatibus atque!</p>

                </div>
                <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo nostrum vitae non vero qui.</p>
            </div>
            <div className="app__chef-sign">
                <p>Shakir Kamal</p>
                <p className='p__opensans'>Chef & Founder</p>
                <img src={images.sign} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Chef