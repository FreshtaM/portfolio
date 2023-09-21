import React from 'react'

import Header from './components/Header'
import Featuers from './components/Featuers'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Featuers/>
      <About/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App