import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100% - 150px);

  display: flex;
  justify-content: center;
  
  @media (max-width: 547px) {
    /* align-items: center; */
    height: calc(100% - 160px);
  }
`;

export const Content = styled.div`
  padding: ${props => props.on === 'true' ? '50px' : '20px'} 50px;
  background-color: #1A1A1D;
  height: 350px;
  width: 450px;

  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 547px) {
    transform: scale(0.8);
    /* margin: 0px 0px; */
  }
  @media (max-width: 500px) {
    /* transform: scale(0.7); */
  }
  @media (max-width: 400px) {
  }
`;

export const Logo = styled.div`
  height: 150px;
  width: 100%;
  padding: 30px 100px;
  display: flex; 
  justify-content: start;
  align-items: flex-start;

  img {
    width: 170px;
    height: 49.46px;
    user-select: none;
  }
  @media (max-width: 547px) {
    padding-top: 20px;
    height: 160px;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorMsg = styled.div`
  transition: 250ms;
  
  height: 45px;
  display: ${props => props.active ? 'none' : "flex"};
  justify-content: center;
  align-items: center;
  font-size: 18pt;
  background-color: #D7576B;
  color: #FFF;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  text-align: center;
  a {
    text-decoration: none;
    color: #04d261;
    transition: 250ms;
    :hover {
      opacity: 0.7;
    }
  }

  input {
    background-color: #202124;
    border: 1px solid rgba(0, 0, 0, 0.2);

    color: #fff;
  
    ::placeholder {
      color: #f0f0f5;
    } 

    :focus {
      border: 2px solid #04d261;
    } 
  }

  input[name="password"] {
    margin-top: 20px;
  }
`;