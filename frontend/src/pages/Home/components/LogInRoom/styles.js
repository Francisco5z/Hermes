import styled from 'styled-components';

export const UnfocusedBackground =  styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 11;

  width: 100vw;
  height: 100vh;

  color: #fff;

  display: ${props => props.active ? "flex" : 'none'};
`;

export const Content = styled.div`
  background-color: var(--box-background-color);
  border: 1px solid var(--box-border-color);

  height: 350px;
  width: 450px;

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .or {
    width: 80%;
    margin: 0 auto;
  }

  .desactive {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: #fff;

    font-size: 15px;

    color: var(--primary-color);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    .button-form {
      width: 80%;
      margin-top: 15px;
      height: 40px;
    }

    input {
      background-color: var(--background-color);
      border: 0;
      height: 40px;
      color: #fff;

      font-size: 20px;

      :focus {
        border: 2px solid var(--primary-color); 
      }
    }

    label:not(:first-child) {
      margin-top: 20px;
    }

    label {
      display: flex;
      flex-direction: column;
      width: 80%;

      div {
        display: flex;
        align-items: center;

        input {
          width: 100%;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;

          border: 1px solid var(--box-border-color);
          background-color: var(--background-color);

          width: 40px !important;
          height: 40px;

          margin-left: 5px;

          cursor: pointer;
          
          transition: 250ms;
          :hover {
            opacity: 0.7;
          }
        }
      } 
    }
  }
`;