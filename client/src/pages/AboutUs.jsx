import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
  align-items: center;
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
            <Title>Rólunk</Title>
            <Container>
                <Image src="https://i.postimg.cc/Jh4ZGLkt/Organigram.png"/>
                
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default AboutUs