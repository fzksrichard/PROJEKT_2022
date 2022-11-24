import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`

const Input = styled.input`
    padding:15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
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

const FormInputSub = (props) => {
  const {label, onChange, ...inputProps}=props;
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...inputProps} onChange={onChange}/>
    </Container>
  )
}

export default FormInputSub