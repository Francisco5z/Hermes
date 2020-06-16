import styled from 'styled-components';

export const Or = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #aaa;
  font-weight: bold;

  @media (max-width: 448px) {
    ::before {
      width: 30%;
    }
  }

  span {
    margin: 0 10px;
  }

  ::before {
    content: '';
    height: 2px;
    width: 40%;
    background-color: ${props => props.stripsColor};
  }
  ::after {
    content: ''; 
    height: 2px;
    width: 40%;
    background-color: ${props => props.stripsColor};
  }
`;