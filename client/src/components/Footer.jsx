import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DAC</Logo>
                <Desc>Design And Create</Desc>
                <SocialContainer>
                    <a href="https://www.facebook.com/profile.php?id=100086538870552">
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                    </a>
                    <a href="https://www.instagram.com/dac_design_create/">
                        <SocialIcon color="E4405F">
                            <Instagram />
                        </SocialIcon>
                    </a>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Hasznos linkek</Title>
                <List>
                    <Link style={{ textDecoration: "none" }} to={"/policy"}>
                        <ListItem>Adatvédelem</ListItem>
                    </Link>
                    <ListItem>GYIK</ListItem>
                    <ListItem>Feltételek</ListItem>
                    <ListItem>Impresszum</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Elérhetőségek</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} />9011 Győr, Bárányréti út 41/B</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />+36 20 256 1552</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} /><a href="mailto:dac@gmail.com">dac@gmail.com</a></ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
