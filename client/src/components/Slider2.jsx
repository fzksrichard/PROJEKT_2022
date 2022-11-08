import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems, sliderItems2 } from "../data";
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
    border: 1px solid black;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0; bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper=styled.div`
    height: 80%;
    display: flex;
    transform:translateX(${(props)=>props.slideIndex*-100}vw);
    transition: all 1.5s ease; //nyílra kattintáskor animáció
`;

const Slide=styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`;

const ImgContainer=styled.div`
    flex: 1;
    height: 100%;
    display: flex;
  justify-content: center;
`;

const Image=styled.img`
   height: 90%;
   margin: auto;
  display: block;
`;
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
`;

const Title =styled.h1`
    font-size: 70px;
    text-align: center;
`;

const Desc =styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
`;

const Button =styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
    margin-left:auto;
    margin-right:auto;
`;

const Slider2 = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleCLick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex<1 ? slideIndex+1 : 0);
        }
    };
    return (
    <Container>
        <Arrow direction="left" onClick={()=> handleCLick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems2.map((item)=>(
            <Slide bg ={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleCLick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
export default Slider2