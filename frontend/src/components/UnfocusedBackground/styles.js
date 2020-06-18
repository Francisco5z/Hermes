import styled from 'styled-components';

export const UnfocusedBackground = styled.div`
  position: absolute;
  z-index: 9;
  top: 0px;
  left: 0px;
  
  display: ${props => props.active ? "block" : "none"};

  background-color: rgba(0, 0, 0, 0.6);
  
  width: 100vw;
  height: 100vh;
`;