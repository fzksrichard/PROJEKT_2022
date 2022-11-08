import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Slider2 from '../components/Slider2'
import styled from 'styled-components'

const Title=styled.h1`
    font-weight: 300;
    text-align: center;
    padding: 20px;
    font-weight: bold;
`

const Reference = () => {
  return (
    <div>
        <Navbar/>
        <Title>Referenciamunkák</Title>
        <Slider2/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Reference