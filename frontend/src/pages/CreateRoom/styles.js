import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  color: #f0f0f5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: rgb(26, 26, 29);
  border: 1px solid rgba(0, 0, 0, 0.2);

  width: 100%;
  max-width: 370px;
  height: 400px;

  padding: 10px 0 0 0;

  .return-to-home {
    text-align: center;
    margin: 0 auto;

    a {
      color: #04d261;
      text-decoration: none;
      transition: 250ms;
      :hover {
        opacity: 0.7;
      }
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 8px;
      width: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    padding: 40px 10px 0 10px;

    label + label {
      margin-top: 20px;
    }

    label {
      display: flex;
      flex-direction: column;
    }

    input {
      border: 0;
      background-color: transparent;

      border-bottom: 2px solid #aaa;
      color: #04d261;

      height: 30px;

      font-size: 15px;

      :focus {
        border-bottom: 2px solid #04d261;
      }
    }

    button {
      margin-top: 30px;
      margin-bottom: 5px;
      height: 40px;

      :hover {
        opacity: 1;
        background-color: #111;
        border: 1px solid #04d261;
      }
    }
  }
`;

export const OrContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const CreateSucces = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  z-index: 4;

  width: 100vw;
  height: 100vh;

  display: ${props => props.active ? "flex" : 'none'};
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.9);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;

    svg {
      color: #04d261;
    }

    p {
      font-size: 20px;
      span {
        color: #8b10ae;
      }
    }

    a {
      margin-top: 10px;
      color: #04d261;
      text-decoration: none;

      transition: 250ms;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;