import React from 'react'
import Slider  from './components/Slider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presentation from './components/presentation'
import Video from './components/video'
import Time from './components/Time'
import BombArea from './components/BombArea'
import Blog from './components/blog'

import './App.css'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Presentation/>
    <Slider/>
    <Video/>
    <Time/>
    <BombArea/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
