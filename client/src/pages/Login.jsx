import { MobileFriendly } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from 'react-alert'
import Navbar from "../components/Navbar";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://wallpapercave.com/wp/wp2141527.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 15px black;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, teal 0 -3px 0 inset;
  transform: translateY(-2px);
  }
  &:focus{
    box-shadow: teal 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, teal 0 -3px 0 inset;
  }
  &:active{
    box-shadow: teal 0 3px 7px inset;
  transform: translateY(2px);
  }
`;

const Link2 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if (error) {
      setErrorMessage('Hib??s felhaszn??l??n??v vagy jelsz??!');
    }else{alert("Sikeres bejelentkez??s!")}
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Bejelentkez??s</Title>
          <Form>
            <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleClick} /* disabled={isFetching} */>Bejelentkez??s</Button>
            {setErrorMessage && <Error>{errorMessage}</Error>}
            <Link2>Elfelejtette a jelszav??t?</Link2>
            <Link to="/register"><Link2>??j fi??k l??trehoz??sa</Link2></Link>
          </Form>
        </Wrapper>
      </Container>
    </div>);
};

export default Login;