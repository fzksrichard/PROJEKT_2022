import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import FormInput from '../components/FormInput'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://wallpaperaccess.com/full/1657858.jpg");
  background-size: cover;
  background-position: center;
`

const Form = styled.form`
  background-color: white;
  padding: 0px 60px;
  border-radius: 10px;
  border: 1px solid black;
  width: 30vw;
`

const Title = styled.h1`
  color: #820c82;
  text-align: center;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-style: 18px;
  margin-top: 15px;
  margin-bottom: 30px;

`

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px 15px 0px;
`

const Select = styled.select`
margin: 5px 10px 5px 5px;
`

const Option = styled.option`
  background-color: ${props => props.color};
`


const Design = () => {


  const [data, setData] = useState({
    title: "",
    deadline: "",
    type: "",
    color: "",
    menuitems: 0,
    target: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
  }
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit} id="designForm">
          <Title>Weboldal tervezés</Title>
          <FormInput
            label="Weboldal címe"
            placeholder="cím"
            name="title"
            onChange={handleChange}
            value={data.title}
            required
            pattern="^[A-Za-z0-9]{2,16}$"
            onInvalid={(e) => e.target.setCustomValidity("Valós weboldalcímet adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
            <SelectContainer>
            <label>Weboldal típusa: </label>
              <Select name="types" form="designForm">
                <Option value="webáruház">Webáruház</Option>
                <Option value="hírportál">Hírportál</Option>
                <Option value="portfólió">Portfólió</Option>
                <Option value="blog">Blog</Option>
              </Select>
              <label>Színvilág: </label>
              <Select name="color" form="designForm">
                <Option value="piros" color="red">Piros</Option>
                <Option value="kék" color="blue">Kék</Option>
                <Option value="sárga" color="yellow">Sárga</Option>
                <Option value="Fehér" color="white">Fehér</Option>
              </Select>
            </SelectContainer>
          <FormInput
            label="Határidő"
            name="deadline"
            type="date"
            onChange={handleChange}
            value={data.deadline} required
            onInvalid={(e) => e.target.setCustomValidity("Kérem valós emailt adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
            <FormInput
            label="Menüpontok száma"
            placeholder="szám"
            name="menuitems"
            onChange={handleChange}
            value={data.title}
            required
            pattern="^[A-Za-z0-9]{2,16}$"
            onInvalid={(e) => e.target.setCustomValidity("Valós weboldalcímet adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <FormInput
            label="Célközönség"
            placeholder="pl. korosztály, nem, földrajzi elhelyezkedés"
            name="target"
            type="text"
            onChange={handleChange}
            value={data.target} required
            onInvalid={(e) => e.target.setCustomValidity("Kérem valós emailt adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
            <FormInput
            label="Weboldal címe"
            placeholder="cím"
            name="title"
            onChange={handleChange}
            value={data.title}
            required
            pattern="^[A-Za-z0-9]{2,16}$"
            onInvalid={(e) => e.target.setCustomValidity("Valós weboldalcímet adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <FormInput
            label="Határidő"
            name="deadline"
            type="date"
            onChange={handleChange}
            value={data.deadline} required
            onInvalid={(e) => e.target.setCustomValidity("Kérem valós emailt adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <Button type="submit">Rendelés előkészítése</Button>
        </Form>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Design