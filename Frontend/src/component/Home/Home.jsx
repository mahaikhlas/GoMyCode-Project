import React from 'react'
import Hero from '../Hero/Hero'
import Programs from '../Programs/Programs'
import Title from '../Title/Title'
import About from '../About/About'
import Campus from '../Campus/Campus'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer';

const Home = () => {
  return (
   
    <div>
    
    <Hero/>
   <div className='container'>
    <Title subTitle='Our PROGRAM' title='What We Offer'/>
    <Programs/>
    <About/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title='What Students Says'/>
    <Testimonials/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    

    </div>
    
     
  </div>
  )
}

export default Home
