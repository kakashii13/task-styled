import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul,li,h1,h2,h3,p, button {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    svg {
        cursor: pointer;
    }

    button, input {
        background: transparent;
        border: 0; 
        outline: none;
    }

    body {
        background-color: #fafafa;
        margin: 0 auto;
        height: 100vh;
        width: 100%;
        overscroll-behavior: none;
    }

    #app {
        overflow-x: hidden; 
        min-height: 100vh;
        padding-bottom: 10px;
    }
`;
