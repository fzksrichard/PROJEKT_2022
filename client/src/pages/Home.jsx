import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider3 from '../components/Slider3'



const Welcome=styled.div`
  display: flex;
  flex-direction: column;
  background: 
    url("https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=2000")
      center;
`

const Title=styled.h1`
  text-align: center;
  margin:30px 0;
`

const Container = styled.div`
  display: flex;
  
`

const DescContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 80px;
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image=styled.img`
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.352), 0 6px 20px 0 rgba(0, 0, 0,  0.352);
`

const Text=styled.span`
  text-align: justify;
  margin: 50px 100px;
  line-height: 1.6;
`
const ButtonContainer=styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button =styled.button`
    margin: 20px;
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
`;

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Navbar />
      <Welcome>
      <Title>Design And Create</Title>
      <Container>
        <ImgContainer>
        <Image src="https://i.ibb.co/TwBfLsR/homepage.png"/>
        </ImgContainer>
        <DescContainer>
          <Text>
          Napjainkban elengedhetetlen egy vállalkozás számára egy weboldal, ugyanis ennek hiánya versenyhátrányt jelenthet a piacon a konkurens vállalatokkal szemben. Az emberek nagy része az interneten keresztül tájékozódik. A legtöbb vállalkozás külső informatikai céget bízik meg ennek elkészítésével. Ezen cégek felkeresése sokszor időigényes és nem is igazán lehet eldönteni, melyik cég lenne a legalkalmasabb. Az árakkal sincsenek tisztában, hiszen irányárak feltüntetése nem takarja a végleges árat, ami minden egyes megrendelőnél személyre szabott az igényeiknek megfelelően. Tehát az esetek túlnyomó többségében a személyes konzultáció elengedhetetlen a végleges árajánlat kialakításhoz. Mi cégünk megoldással szeretne szolgálni az előbb említett problémára. Ez egy olyan felület, ahol az ügyfelek nagy vonalakban megtervezhetik a személyes, üzleti, stb. céljaikat szolgáló weboldalakat. A tervezési folyamat, attól függően, hogy mit akar terveztetni a felhasználó, űrlapokon keresztül menne végbe.
          </Text>
          <Link to={"/design"}>
          <Button style={!user ? { display: "none" } : {}}>TERVEZÉS ELKEZDÉSE</Button> </Link>
          <ButtonContainer>
          <Link to={"/register"}>
          <Button style={user ? { display: "none" } : {}}>REGISZTRÁCIÓ</Button> </Link>
          <Link to={"/login"}>
          <Button style={user ? { display: "none" } : {}}>BEJELENTKEZÉS</Button> </Link>
          </ButtonContainer>
        </DescContainer>
      </Container>
      </Welcome>
      {/* <Slider3/>
        <Categories/>
        <Products/> */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home