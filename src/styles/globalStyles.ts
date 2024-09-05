import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
    --black: #000000;
    --gray: #ababab;
    --white: #ffffff;
    --purple: #bf89f5;
    --red: #fc836d;
    }

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
