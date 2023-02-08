import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // variáveis das cores
    :root {
        --red: #e52e4d;
        --red-light: #7B3D45;
        --blue: #00008B;
        --sky-blue: #87CEEB;
        --green: #33cc95;
        --blue-light: #6495ED;
        --semi-blue: #0000FF;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #FAFAFA;
        --shape: #FFFFFF;
        --whatsapp: #34af23;
    }
    // Toda a aplicação vai receber
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5% // 14px
        }
    }
    body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family:'Poppins', sans-serif ;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    
    button {
        cursor: pointer;
        border: none;
    }
`