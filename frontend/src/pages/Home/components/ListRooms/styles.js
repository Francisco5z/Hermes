import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  overflow: scroll;
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
  background-color: #fff;

  border-radius: 15px;
  padding: 15px;

  h1 {
    color: #04d261;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;