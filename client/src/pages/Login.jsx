import { MobileFriendly } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



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
  ${mobile({width: "75%"})}
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
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error=styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Bejelentkezés</Title>
        <Form>
          <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>Bejelentkezés</Button>
          {error && <Error>Something went wrong</Error>} 
          <Link>Elfelejtette a jelszavát?</Link>
          <Link>Új fiók létrehozása</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;