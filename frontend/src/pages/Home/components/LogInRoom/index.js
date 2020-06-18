import React, { useState } from 'react';
import api from '../../../../services/api';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import UnfocusedBackground from '../../../../components/UnfocusedBackground';
import OrComponent from '../../../../components/Or';

function LogInRoom({ active, desactiveFunc, userId }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [accessId, setAccessId] = useState('');

  function handleTogglePasswordVisibility(state, setState) {
    if (state) {
      setState(false)
    }
    if (!state) {
      setState(true)
    }
  }

  async function handleLogInRoom(e) {
    e.preventDefault();
    
    const data = {
      access_id: accessId,
      password
    }

    const response = await api.post(`/room/auth/${userId}`, data);

    if (response.status === 200) {
      window.location.reload(false);
    }
  }

  return (
    <>
      <UnfocusedBackground active={active} />
      <Container active={active}>
        <Content>
          <h1> Entrar em uma Sala </h1>
          <form onSubmit={handleLogInRoom}>
            <label>
              <span>ID de acesso</span>
              <input 
                type="text"
                name="access_id" 
                value={accessId}
                onChange={e => setAccessId(e.target.value)}
                autoComplete='off'
              />
            </label>
            <label>
              <span>Senha</span>
              <div>
                <input 
                  type={passwordVisible ? "text" : 'password'}
                  name="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete='off'
                />
                <button type="button" onClick={() => handleTogglePasswordVisibility(passwordVisible, setPasswordVisible)}>{passwordVisible ? <AiFillEyeInvisible color="#fff" size={20} /> : <AiFillEye color="#fff" size={20} />}</button>
              </div>
            </label>
            <button className="button-form">Entrar</button>
          </form>
          <div className="or">
            <OrComponent />
          </div>
          <button className="desactive" onClick={() => desactiveFunc(false)}>Cancelar</button>
        </Content>
      </Container>
    </>
  );
}

export default LogInRoom;