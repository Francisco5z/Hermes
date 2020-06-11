import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import AppContext from '../../../../context/app';
import AuthContex from '../../../../context/auth';

import { Sidebar, SidebarLinks, Separator, LogoutButton } from './styles';
import { AiFillHome } from 'react-icons/ai';
import { FiPlus, FiLogIn, FiLogOut } from 'react-icons/fi';

function SidebarComponent() {
  const [selectedLink, setSelectedLink] = useState(useLocation().pathname);

  const { sidebarExtend, setSidebarExtend } = useContext(AppContext);
  const { logout } = useContext(AuthContex);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setSelectedLink(location.pathname)
    if (sidebarExtend) {
      window.addEventListener('click', e => {
        if (e.clientX > 300) {
          setSidebarExtend(false);
        }
      });
    }
  }, [sidebarExtend, setSidebarExtend, selectedLink, location.pathname]);

  function redirect(url) {
    setSidebarExtend(false)
    setInterval(() => history.push(url), 300)
    
  }

  return (
    <Sidebar active={sidebarExtend}>
      <SidebarLinks selected={selectedLink === '/'}  onClick={() => redirect('/')}>
        <AiFillHome size={30} /> 
        <h3>Salas</h3>
      </SidebarLinks>

      <Separator />

      <SidebarLinks onClick={() => redirect('/create-room')}>
        <FiPlus size={30} />
        <h3>Criar uma sala</h3>
      </SidebarLinks>
      <SidebarLinks onClick={() => redirect('/enter-room')}>
        <FiLogIn size={30} />
        <h3>Entrar em uma sala</h3>
      </SidebarLinks>

      <LogoutButton onClick={logout}>
        <FiLogOut size={30} />
        <h3> Log out </h3>
      </LogoutButton>
    </Sidebar>
  );
}

export default SidebarComponent;