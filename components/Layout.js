import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  width: 100%;
  max-width: 480px;

  & > :last-child {
    margin-bottom: 0;
  }
`

export default ({ children }) => (
  <Wrap>
    <Content>
      {children}
    </Content>
  </Wrap>
)
