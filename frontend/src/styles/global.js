import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    }
    
    body, button, a, input, textarea {
        font-family: 'Roboto Slab', serif;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    button {
        cursor: pointer;
        border: none;
        transition: transform 0.2s, filter 0.5s;
    }

    button:hover {
        filter: brightness(0.8);
    }

    button:active {
        transform: scale(0.95);
    }

    a {
        transition: filter 0.5s;
        text-decoration: none;
    }

    a:hover {
        filter: brightness(0.8);
    }
`