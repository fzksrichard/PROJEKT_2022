import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import FormInput from '../components/FormInput'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { useNavigate, Link} from "react-router-dom";
import FormInputSub from '../components/FormInputSub'
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120vh;
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
  width: 30vw;
  overflow-y: scroll;
  height: 85vh;
  box-shadow: 0px 0px 10px black;
`

const Title = styled.h1`
  color: #820c82;
  text-align: center;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 103%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-style: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rebeccapurple 0 -3px 0 inset;
  transform: translateY(-2px);
  }
  &:focus{
    box-shadow: rebeccapurple 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rebeccapurple 0 -3px 0 inset;
  }
  &:active{
    box-shadow: rebeccapurple 0 3px 7px inset;
  transform: translateY(2px);
  }

`

const SelectsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
`

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Select = styled.select`
`

const Label = styled.label`
  margin-right: 5px;
  font-size: 15px;
`

const Option = styled.option`
  background-color: ${props => props.color};
`

const Error = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
`


const Design = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate();
  const [data, setData] = useState({
    title: "",
    deadline: "",
    type: "webáruház",
    color: "white",
    menuitems: 0,
    menuitemsdesc: "",
    menuitemsArray: [],
    desc: "",
    target: "",
    responsive: false,
    logo: false
  });
  const [inputfieldsToAdd, setInputfieldsToAdd] = useState(0);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleChange2 = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setInputfieldsToAdd(input.value)
  };

  const [helpArray, setHelpArray] = useState([]);

  const handleChange3 = (event, index) => {
    const newHelpArray = [...helpArray];
    newHelpArray[index] = event.target.value
    setHelpArray(newHelpArray)
    setData({ ...data, menuitemsArray: newHelpArray });
  }

  const handleClick = (ev) => {
    setData({ ...data, [ev.target.name]: ev.target.checked });
  };

  const fields = [];
  for (let i = 1; i <= inputfieldsToAdd; i++) {
    fields.push(<FormInputSub label={`${i}. menüpont`} placeholder={`${i}. menüpont`} type="text" id={i} key={i} value={data.menuitemsArray[i - 1]} onChange={(ev) => handleChange3(ev, i - 1)} />);
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  let yourDate = new Date()
  yourDate = addDays(yourDate, 30)
  yourDate = yourDate.toISOString().split('T')[0]

/*   const handleClickKuldes = () => {
    dispatch(addProduct({ ...data }));
    Navigate("/cart")
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...data }));
    Navigate("/cart")
    /* try {
      const { data: res } = await userRequest.post("/sitedesigns", data);
      alert("Siker!")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) { }
    } */
  }

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
            pattern=".{2,30}"
            onInvalid={(e) => e.target.setCustomValidity("Valós weboldalcímet adjon meg!")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <SelectsContainer>
            <SelectContainer>
              <Label>Weboldal típusa: </Label>
              <Select name="type" onChange={handleChange}>
                <Option value="webáruház">Webáruház</Option>
                <Option value="hírportál">Hírportál</Option>
                <Option value="portfólió">Portfólió</Option>
                <Option value="blog">Blog</Option>
                <Option value="fórum">Közösségi média, fórum</Option>
              </Select>
            </SelectContainer>
            <SelectContainer>
              <Label>Színvilág: </Label>
              <Select name="color" onChange={handleChange}>
                <Option value="red" color="red">Piros</Option>
                <Option value="blue" color="blue">Kék</Option>
                <Option value="yellow" color="yellow">Sárga</Option>
                <Option value="white" color="white">Fehér</Option>
                <Option value="purple" color="purple">Lila</Option>
                <Option value="gray" color="gray">Szürke</Option>
                <Option value="green" color="green">Zöld</Option>
              </Select>
            </SelectContainer>
          </SelectsContainer>
          <FormInput
            label="Weboldal jellemzése"
            placeholder="jellemzés"
            name="desc"
            type="text"
            onChange={handleChange}
            value={data.desc}
            required
            onInvalid={(e) => e.target.setCustomValidity("")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <FormInput
            label="Menüpontok száma"
            placeholder="0-6"
            type="number"
            name="menuitems"
            onChange={handleChange2}
            value={data.menuitems}
            min="0" max="6"
            required
            onInvalid={(e) => e.target.setCustomValidity("Lehetséges menüpontok száma max 6!")}
            onInput={(e) => e.target.setCustomValidity("")} />
          {inputfieldsToAdd > 0 && inputfieldsToAdd < 7 && fields}
          <FormInput
            label="Célközönség"
            placeholder="pl. korosztály, nem, földrajzi elhelyezkedés"
            name="target"
            type="text"
            onChange={handleChange}
            value={data.target} required
            onInvalid={(e) => e.target.setCustomValidity("")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <SelectsContainer>
            <SelectContainer>
            <Label>Reszponzivitás</Label>
            <input type="checkbox" name="responsive" onClick={(ev) => handleClick(ev)} />
            </SelectContainer>
            <SelectContainer>
            <Label>Logó terveztetés</Label>
            <input type="checkbox" name="logo" onClick={(ev) => handleClick(ev)} />
            </SelectContainer>
          </SelectsContainer>
          <FormInput
            label="Határidő"
            name="deadline"
            type="date"
            min={yourDate}
            onChange={handleChange}
            value={data.deadline} required
            onInvalid={(e) => e.target.setCustomValidity("Kérem adjon meg egy határidőt!")}
            onInput={(e) => e.target.setCustomValidity("")} />
          <Button type="submit" /* onClick={handleClickKuldes} */>Rendelés előkészítése</Button>
        </Form>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Design