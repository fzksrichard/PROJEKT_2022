import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  align-items: center;
  background: radial-gradient(circle, rgba(63,212,251,0.45451684091605393) 0%, rgba(234,70,252,0.300455216266194) 100%);
`

const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
    font-weight: 300;
`

const Image=styled.img`
height: 90%;
`

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <Container>
            <Title>Rólunk</Title>
                <Image src="https://i.ibb.co/LSjxGMC/organigram2.png"/>
                
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default AboutUs