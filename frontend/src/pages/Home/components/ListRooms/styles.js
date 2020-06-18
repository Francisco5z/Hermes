import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  overflow: ${props => Number(props.dataLength) >= 4 ? "scroll" : "hidden"};
  overflow-x: hidden;
  max-height: ${`${window.innerHeight - 100}px`};

  @media (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 411px) {
    max-height: 823px;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const RoomCard = styled.div`
  width: 280px;
  height: 320px;
  background-color: var(--box-background-color);
  border: 1px solid var(--box-border-color);

  border-radius: 15px;
  padding: 15px;

  h1 {
    color: var(--primary-color);
  }

  span, p {
    color: #f0f0f5;
  }

  /* div:first-child {
  } */

  div:not(:first-child) {
    margin-top: 10px;
    position: relative;
    
    height: 230px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      bottom: 30px;
      text-decoration: none;
      font-size: 20px;
      color: #fff;
      height: 35px;  
      width: 100%;
      border-radius: 2px;
      border: 0;
      background-color: var(--primary-color);
      cursor: pointer;

      transition: 250ms;
      :hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;