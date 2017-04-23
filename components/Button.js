import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  text-align: right;
  margin-top: 24px;
  margin-bottom: 16px;
`
const Button = styled.button`
  float: right;
  margin: 0;
  border: 0;
  padding: 10px 20px;
  min-width: 200px;
  font-size: inherit;
  font-family: inherit;
  background: #ccc;
  cursor: pointer;
  background: #d9d9d9;
  color: #000;
  font-weight: 500;
  outline: none;
  transition: 0.2s all ease;

  &:hover,
  &:focus {
    background: #dfdfdf;
  }
`

export default (props) => (
  <Wrap>
    <Button {...props} />
  </Wrap>
)
