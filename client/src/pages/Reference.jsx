import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Title=styled.h1`
    font-weight: 300;
    text-align: center;
    padding: 20px;
`

const Reference = () => {
  return (
    <div>
        <Navbar/>
        <Title>Referenciamunkák</Title>
        <Slider/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Reference