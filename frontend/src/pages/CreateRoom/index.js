import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Content, OrContainer, CreateSucces } from './styles';
import { MdDone } from 'react-icons/md';

import Or from '../../components/Or';

function CreateRoom({ history }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [createdRoomAccessId, setCreatedRoomAccessId] = useState('');

  const { id } = JSON.parse(localStorage.getItem('@RAuth:user'));

  async function handleCreateRoom(e) {
    e.preventDefault()

    const data = { name, password };

    const createdRoom = await api.post(`/room/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@RAuth:token')}`
      }
    });

    if (createdRoom.status === 200) {
      setCreatedRoomAccessId(createdRoom.data.access_id);
    }

    if (createdRoom.status === 401) {
      localStorage.clear();
      setTimeout(() => {
        window.location.replace('/')
      }, 1000);
    }
  }

  return (
    <>
      <CreateSucces active={(!!createdRoomAccessId)}>
        <div>
          <MdDone size={50} />
          <h1> Criado com Sucesso! </h1>
          <p> Id de Acesso: <span> {createdRoomAccessId} </span></p>

          <a href="/">Voltar</a>
        </div>
      </CreateSucces>
      <Container>
        <Content>
          <h1>Criar uma Sala </h1>
          <form onSubmit={handleCreateRoom}>
            <label>
              <span>Nome da sala</span> 
              <input 
                type="text" 
                name="name" 
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete='off'
              />
            </label>
            <label>
              <span> Senha </span>
              <input 
                type="text" 
                name="name" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete='off'
              />
            </label>
            <button type="submit" className="button-form">Criar</button>
          </form>
          <OrContainer>
            <Or />
          </OrContainer>
          <div className="return-to-home">
            <a href="/">Voltar para Salas</a>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default CreateRoom;