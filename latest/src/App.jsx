import { useState,React } from 'react'



import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Find from './components/find/Find'
import Driver from './components/driver/Driver'
import Luxury from './luxury/Luxury'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/> 
      <Hero/>
      <Find/>
      <Driver/>
      <Luxury/>
      <Footer/>
    </>
  )
}

export default App
