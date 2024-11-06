import React from 'react'
import Navbar from '../Navbar'
import Intro from '../Intro'
import About from '../About'
import Skill from '../Skill'
import Portfolio from '../Portfolio'
import Footer from '../Footer'

const Page = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <About/>
        <Skill/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}

export default Page