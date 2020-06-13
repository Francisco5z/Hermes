import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import AppContext from '../../context/app';

import { Container, HamburgerMenu, Header, Main } from './styles';

import ListRooms from './components/ListRooms';
import Sidebar from './components/Sidebar';

export default function Home() {
  const { sidebarExtend, setSidebarExtend } = useContext(AppContext)

  function handleToggleSidebar() {
    if (sidebarExtend) {
      setSidebarExtend(false);
    }
    if (!sidebarExtend) {
      setSidebarExtend(true);
    }
  }

  return (
    <>
      <Sidebar />
      <Container>
        <Header>
          <HamburgerMenu onClick={handleToggleSidebar}>
            <div className="on"></div>  
            <div className="two"></div>  
            <div className="three"></div>  
          </HamburgerMenu>
          <img src={require('../../assets/Logo-Hermes-black.png')} alt="Hermes"/>
        </Header>
        <Main>
          <ListRooms />
        </Main>
      </Container>
    </>
  );
}