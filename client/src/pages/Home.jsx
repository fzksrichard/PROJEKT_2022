import React from 'react'
import Announcement from '../components/Announcement'
import Categorieees from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (

    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categorieees/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home