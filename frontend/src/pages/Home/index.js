import React, { useContext, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import AppContext from '../../context/app';

import { Container, HamburgerMenu, Header, Main } from './styles';

import ListRooms from './components/ListRooms';
import Sidebar from './components/Sidebar';
import LogInRoom from './components/LogInRoom';

import UnfocusedBackground from '../../components/UnfocusedBackground';

export default function Home() {
  const { sidebarExtend, setSidebarExtend } = useContext(AppContext)
  const [UnfocusedBackgroundActive, setUnfocusedBackgroundActive] = useState(false)
  const [logInRoomExtend, setLogInRoomExtend] = useState(false);
  const [storagedUserId, setStoragedUserId] = useState('');

  useEffect(() => {
    const storagedUser = JSON.parse(localStorage.getItem('@RAuth:user'));

    setStoragedUserId(storagedUser.id);
  }, [])

  function handleToggleSidebar() {
    if (sidebarExtend) {
      setSidebarExtend(false);
      setUnfocusedBackgroundActive(false);
    }
    if (!sidebarExtend) {
      setSidebarExtend(true);
      setUnfocusedBackgroundActive(true);
    }
  }

  return (
    <>
      <Sidebar 
        setUnfocusedBackgroundActive={setUnfocusedBackgroundActive}
        setLogInRoomExtend={setLogInRoomExtend}  
      />
      <LogInRoom 
        active={logInRoomExtend} 
        desactiveFunc={setLogInRoomExtend}
        userId={storagedUserId} 
      />
      <UnfocusedBackground active={sidebarExtend} />
      <Container>
        <Header>
          <HamburgerMenu onClick={handleToggleSidebar}>
            <div className="on"></div>  
            <div className="two"></div>  
            <div className="three"></div>  
          </HamburgerMenu>
          <img src={require('../../assets/Logo-Hermes.png')} alt="Hermes"/>
        </Header>
        <Main>
          <ListRooms />
        </Main>
      </Container>
    </>
  );
}