import { Badge } from '@material-ui/core';
import { Search, ShoppingBasketOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from "../redux/apiCalls";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    /* border-bottom: 1px solid black;
    background: url("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg"); */
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`

/* const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
` */

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
     flex: 1;
     align-items: flex-start;
`

const Logo = styled.div`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const Image = styled.img`
    height: 40px;
`

const Right = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     ${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover {
        font-weight: bold;
}
`


const Navbar = () => {
    const navigate = useNavigate();

    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        localStorage.clear();
        Logout(dispatch);
        navigate("/");
        alert("Sikeres kijelentkezés!")
    };

    return (
        <Container>
            <Wrapper>
                {/* <Left>
                    <Language>HU</Language>
                    <SearchContainer>
                        <Input placeholder="Keresés" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left> */}
                <Center>
                    <Link style={{ textDecoration: "none", color: "black" }} to="/">
                        <Logo><Image src="https://i.postimg.cc/wvzF82KR/DAC.png"/></Logo>
                    </Link>
                </Center>
                <Right>
                <Link style={{ textDecoration: "none" }} to={"/"}>
                        <MenuItem>
                            Főoldal
                        </MenuItem>
                    </Link>
                <Link style={{ textDecoration: "none" }} to={"/design"}>
                        <MenuItem style={!user ? { display: "none" } : {}}>
                            Tervezés
                        </MenuItem>
                    </Link>
                <Link style={{ textDecoration: "none" }} to={"/about"}>
                        <MenuItem>
                            Rólunk
                        </MenuItem>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={"/reference"}>
                        <MenuItem>
                            Referenciák
                        </MenuItem>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to={"/register"}>
                        <MenuItem style={user ? { display: "none" } : {}}>
                            Regisztráció
                        </MenuItem>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to={"/login"}>
                        <MenuItem style={user ? { display: "none" } : {}}>
                            Bejelentkezés
                        </MenuItem>
                    </Link>
                    
                    <MenuItem style={!user ? { display: "none" } : {}} onClick={(e) => handleLogout(e)}>
                        Kijelentkezés
                    </MenuItem>
                    
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingBasketOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
