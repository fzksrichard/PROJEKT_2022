import React from 'react'
import Ann from '../components/Ann'
import Categorieees from '../components/Categorieees'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slid from '../components/Slid'

const Home = () => {
  return (

    <div>
        <Ann/>
        <Navbar/>
        <Slid/>
        <Categorieees/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home