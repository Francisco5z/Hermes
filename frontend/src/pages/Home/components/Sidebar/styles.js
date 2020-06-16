import styled from 'styled-components';

export const Separator = styled.div`
  width: 70%;
  margin: 20px auto 25px auto;
  height: 1px;
  background-color: #aaa;
`;

export const Sidebar = styled.aside`
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  z-index: 10;
  left: ${props => props.active ? 0 : "-400px"};

  transition: 250ms;

  background-color: #202124;
  width: 300px;
  height: 100%;

  border: 1px solid rgba(0, 0,0, 0.2);

  /* box-shadow: 3px 4px 30px #aaa; */
`;

export const SidebarLinks = styled.div`
  position: relative;
  width: 90%;
  height: 50px;
  border: 1px solid var(--box-border-color);
  border-radius: 30px;
  margin: 0 auto 10px auto;

  background-color: var(--box-background-color);
  
  color: #f0f0f5;

  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;

  transition: box-shadow 250ms;

  :hover {
    border: 2px solid #04d261;
    background-color: #1A1A1D;
    box-shadow: 10px 8px 20px #111;
  }

  ${props => props.selected ? `
    border: 2px solid #04d261;
    background-color: #1A1A1D;
    :hover {
      box-shadow: none;
    }
  ` : ``}

  span {
    margin-left: 10px;
    font-size: 15px;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  bottom: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 50px;

  background-color: #04d261;
  border: none;
  color: #fff;

  cursor: pointer;

  transition: 250ms;

  :hover {
    opacity: 0.7;
  }

  h3 {
    margin-left: 7px;
  }
`;