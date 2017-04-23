import styled from 'styled-components'

export default styled.a`
  float: right;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;
  opacity: 0.5;
  font-size: 14px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
