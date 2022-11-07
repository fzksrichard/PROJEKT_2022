import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Alert } from 'react-alert';

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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  text-align-last: center;
`;

const Link2 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Middle = styled.div`
  text-align: center;
  padding: 2px;
  margin-top: 8px;
`;

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    passwordconfirm: ""
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.password !== data.passwordconfirm) { setErrorMessage('Hibás megerősített jelszó!'); }
      else {
        const { data: res } = await userRequest.post("/auth/register", data);
        alert("Sikeres regisztráció!")
        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) { }
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Regisztráció</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="felhasználónév"
              name="username"
              onChange={handleChange}
              value={data.username} required
              pattern="^[A-Za-z0-9]{3,16}$"
              onInvalid={(e) => e.target.setCustomValidity("A felhasználó név 3-16 karakterből állhat, és nem tartalmazhat speciális karaktereket!")}
              onInput={(e) => e.target.setCustomValidity("")} />
            <Error>{ }</Error>

            <Input
              placeholder="E-mail cím"
              name="email"
              type="email"
              onChange={handleChange}
              value={data.email} required
              onInvalid={(e) => e.target.setCustomValidity("Kérem valós emailt adjon meg!")}
              onInput={(e) => e.target.setCustomValidity("")} />
            <Error></Error>

            <Input
              placeholder="jelszó"
              name="password"
              type="password"
              onChange={handleChange}
              value={data.password} required
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{5,20}$"
              onInvalid={(e) => e.target.setCustomValidity("A jelszó 5-20 karakterből kell, hogy álljon, és tartalmaznia kell számot!")}
              onInput={(e) => e.target.setCustomValidity("")} />
            <Error></Error>

            <Input placeholder="jelszó megerősítése"
              name="passwordconfirm"
              type="password"
              onChange={handleChange}
              value={data.passwordconfirm} required
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{5,20}$"
              onInvalid={(e) =>
                e.target.setCustomValidity("A jelszó 5-20 karakterből kell, hogy álljon, és tartalmaznia kell számot!")}
              onInput={(e) => e.target.setCustomValidity("")} />
            <Error></Error>
            <br />
            <Middle>
              {errorMessage && <Error>{errorMessage} <br /></Error>}
              <Agreement>
                A regisztrációval elfogadom az általános felhasználási feltételeket és tisztában vagyok a benne leírtakkal.&nbsp;
                <b>
                  <Link2 href="https://www.pirex.hu/vasarloi-informaciok/altalanos-szerzodesi-feltetelek?gclid=Cj0KCQjwr-SSBhC9ARIsANhzu16iLl-EPADqQne0khH9POJtPkPZGh9RhzrADa-Y3m14f2LnqhrglCwaAmEKEALw_wcB">
                    Tudj meg többet
                  </Link2>
                </b>
              </Agreement>
              <br/>
              <Button type="submit">Regisztrálok</Button>
            </Middle>
          </Form>
          <Middle>
          <Link to="/login"><Link2>Már van felhasználói fiókom</Link2></Link>
        </Middle>
        </Wrapper>
      </Container>
    </div>);
};

export default Register;
