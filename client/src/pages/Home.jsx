import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'



const Welcome=styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle, rgba(63,212,251,0.45451684091605393) 0%, rgba(234,70,252,0.17440479609812676) 100%);
`

const Title=styled.h1`
  text-align: center;
  margin:30px 0;
`

const Container = styled.div`
  display: flex;
  
`

const DescContainer = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0px;
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const Image=styled.img`
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.352), 0 6px 20px 0 rgba(0, 0, 0,  0.352);
`

const Text=styled.div`
  text-align: justify;
  margin: 50px 80px 0 0;
  line-height: 1.6;
`
const ButtonContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 80px;
`

const Button =styled.button`
    margin: 20px;
    padding: 10px;
    font-size:20px;
    cursor: pointer;
    align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  height: 48px;
  line-height: 1;
  padding-left: 16px;
  padding-right: 16px;
  transition: box-shadow .15s,transform .15s;
  font-size: 18px;

  &:hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
  }
  &:focus{
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  &:active{
    box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
  }
`;

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Navbar />
      <Welcome>
      <Title>
        <img src="https://i.postimg.cc/wvzF82KR/DAC.png"/>
      </Title>
      <Container>
        <ImgContainer>
        <Image src="https://i.ibb.co/TwBfLsR/homepage.png"/>
        </ImgContainer>
        <DescContainer>
          <Text>
          Napjainkban elengedhetetlen egy vállalkozás számára egy weboldal, ugyanis ennek hiánya versenyhátrányt jelenthet a piacon a konkurens vállalatokkal szemben. Az emberek nagy része az interneten keresztül tájékozódik. A legtöbb vállalkozás külső informatikai céget bízik meg ennek elkészítésével. Ezen cégek felkeresése sokszor időigényes és nem is igazán lehet eldönteni, melyik cég lenne a legalkalmasabb. Az árakkal sincsenek tisztában, hiszen irányárak feltüntetése nem takarja a végleges árat, ami minden egyes megrendelőnél személyre szabott az igényeiknek megfelelően. Tehát az esetek túlnyomó többségében a személyes konzultáció elengedhetetlen a végleges árajánlat kialakításhoz. Mi cégünk megoldással szeretne szolgálni az előbb említett problémára. Ez egy olyan felület, ahol az ügyfelek nagy vonalakban megtervezhetik a személyes, üzleti, stb. céljaikat szolgáló weboldalakat. A tervezési folyamat, attól függően, hogy mit akar terveztetni a felhasználó, űrlapokon keresztül menne végbe.
          </Text>
          
          <ButtonContainer>
          <Link to={"/design"}>
          <Button style={!user ? { display: "none" } : {}}>TERVEZÉS ELKEZDÉSE</Button> </Link>
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