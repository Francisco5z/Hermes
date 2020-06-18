import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Aside = styled.aside`
  width: 400px;
  height: 100%;
  background-color: var(--box-background-color);

  padding: 0 30px;
  border: 1px solid var(--box-border-color);

  input[name="name"], input[name="email"] {
    margin-top: 15px;
  }

  h1 {
    font-size: 25pt;
    /* color: var(--primary-color); */
    color: #f0f0f5;
  }

  img {
    width: 200px;
    user-select: none;
    margin: 30px 0 20px 0;
  }

  form {
    div {
      margin-top: 15px;

      display: flex;
      flex-direction: row;

      button {
        width: 70px;
        margin-left: 10px;
      }
    }

    div button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--box-border-color);

      background-color: var(--background-color);

      cursor: pointer;
      transition: 250ms;

      :hover {
        opacity: 0.7;
      }
    }
  } 

  .link {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--primary-color);
      transition: 250ms;
      
      :hover {
        opacity: 0.7;
      }
    }
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const DoneMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.9;
  z-index: 10;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h2 {
    @media (max-width: 320px) {
      font-size: 15pt;
    }
    margin-top: 15px;
    ::selection {
      color: #04d261;
    }
  }
`;