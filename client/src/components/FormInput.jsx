import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin: 10px 0px;
    border-radius: 5px;
    width: 95%;
color: rgb(36, 35, 42);
font-size: 15px;
padding: 8px 16px;
border: 2px solid lightgray;
box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
background: rgb(251, 251, 251);
transition: all 0.1s ease 0s;
:focus{
    border: 2px solid rgb(124, 138, 255);
}
`

const Label=styled.label`
  font-size: 12px;
  color: gray;
`

const Span=styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`

const FormInput = (props) => {
  const {label, onChange, ...inputProps}=props;
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...inputProps} onChange={onChange}/>
    </Container>
  )
}

export default FormInput