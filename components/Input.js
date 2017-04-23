import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`
const Input = styled.input`
  width: 100%;
  padding: 5px 15px;
  border: 1px solid #eee;
  font-size: inherit;
  font-family: inherit;
  line-height: 1;
  height: 44px;
  outline: none;
  transition: 0.2s all ease;

  &:focus {
    border-color: #ccc;
  }
`

const Main = styled.div`
  flex: 1 1 100%;
`
const Helper = styled.div`
  flex: 0 1 auto;
  background: #eee;
  padding: 0 10px
  line-height: 44px;
  min-width: 44px;
  text-align: center;
`

export default ({ before, after, ...inputProps }) => (
  <Wrap>
    {before !== undefined ? <Helper>{before}</Helper> : null}

    <Main>
      <Input {...inputProps} />
    </Main>

    {after !== undefined ? <Helper>{after}</Helper> : null}
  </Wrap>
)
