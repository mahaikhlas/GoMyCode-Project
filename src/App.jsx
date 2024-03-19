import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/> 
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Students Says'/>
      <Testimonials/>
      </div>
      
       
    </div>
  )
}

export default App
