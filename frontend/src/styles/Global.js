import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Noto sans", sans-serif;
  }

  body, html, #root {
    height: 100vh;
    background-color: #202124;
    overflow: hidden;
    -webkit-font-smoothing: auto;

    --box-border-color: rgba(0, 0, 0, 0.2);
    --box-background-color: #1A1A1D;
    --background-color: #202124;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto", sans-serif;
  }


  .input-form {
    height: 50px;
    width: 100%;
    font-size: 16pt;
    background-color: #f0f0f5;
    border: none;
    padding-left: 5px;
    border-radius: 2px;
    :focus {
      border: 2px solid #1144aa; 
    }
  }

  .button-form {
    border: none;
    width: 100%;
    margin-top: 30px;
    height: 50px;
    background-color: #4ecb79;
    color: #fff;
    font-size: 15pt;
    cursor: pointer;
    transition: opacity 500ms;

    :hover {
      opacity: 0.7;
    }
  }
`;