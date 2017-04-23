import React from 'react'
import styled from 'styled-components'

export default styled.table`
  width: 100%;
  margin: 0 0 16px;
  border: 0 solid #eee;
  border-top-width: 1px;
  line-height: 1.2;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    margin: 0;
    padding: 10px 0;
    border: 0;
    border-bottom: 1px solid #eee;
  }
  th {
    opacity: 0.75;
    font-weight: 500;
  }
  td {
    font-weight: 400;
    text-align: right;
  }
`
