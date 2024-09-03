import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: 'Ubuntu Sans', sans-serif;
    font-weight: 400;
    }
`

export default GlobalStyle
