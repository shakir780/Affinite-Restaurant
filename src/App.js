import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Container/Header/Header'
import AboutUs from './Container/AboutUS/AboutUs'
import Menu from './Container/Menu/Menu'
import './App.css'
import Chef from './Container/Chef/Chef'
import Intro from './Container/Intro/Intro'
import Testimonials from './Container/Testimonials/Testimonials'
import Laurels from './Container/Laurels/Laurels'
import FindUs from './Container/Findus/FindUs'
import Footer from './Container/Footer/Footer'
const App = () => {
  return (
    <div>
<Navbar />
<Header />
<AboutUs />
<Menu />
<Chef/>
<Intro/>
<Testimonials />
<Laurels />
<FindUs />
<Footer/>

    </div>
  )
}

export default App