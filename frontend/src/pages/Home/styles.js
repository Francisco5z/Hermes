import styled from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.header`
  height: 70px;
  /* background-color: #fff; */

  padding-left: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 140px;
    margin-left: 50px;
  }
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 21px;
  
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: #fff; 
  }

  .two, .three {
    margin-top: 6px;
  }
`;

export const Main = styled.main`
  padding: 30px 100px 0px 100px;

  height: ${`${window.innerHeight - 100}px`};

  @media (max-width: 570px) {
    padding: 30px 30px 0px 30px;
  }

  @media (max-width: 320px) {
    padding: 0;
    padding-top: 20px;
  }
`;