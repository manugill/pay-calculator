import { injectGlobal } from 'styled-components'

injectGlobal`
  /* Basic reset with box sizing */
  html {
    text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  /* Base styles */
  html {
    font-family: Raleway, sans-serif;
    font-size: 16px;
    line-height: 1;
  }
`
