import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  overflow: ${props => props.dataLength >= 3 ? "scroll" : 'hidden'};
  overflow-x: hidden;
  max-height: ${`${window.innerHeight - 100}px`};

  @media (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
  }


  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const RoomCard = styled.div`
  width: 300px;
  height: 320px;
  background-color: #1a1a1d;

  border: 1px solid rgba(0, 0, 0, 0.2);

  border-radius: 15px;
  padding: 15px;

  header {
    h1 {
      color: #04d261;
    }
    span {
      color: #fff;
    }
  }

  main {
    margin-top: 10px;
    height: 220px;
    position: relative;

    color: #fff;

    button {
      position: absolute;
      bottom: 20px;
      background-color: #04d261;
      border: none;
      width: 100%;
      height: 40px;
      font-size: 14pt;
      font-weight: bold;
      color: #fff;

      z-index: 8;

      cursor: pointer;

      :hover {
        background-color: #202124;
        border: 1px solid #04d261;
      }
    }
  }

  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;