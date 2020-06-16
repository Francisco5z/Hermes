import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

import { Container, RoomCard } from './styles';

function ListRooms() {
  /**@type {[
   *  [{ 
   *    _id: string, 
   *    name: string,
   *    access_id: string,
   *    total_users: number
   *  }], 
   *  React.Dispatch<React.SetStateAction<any[]>>
   * ]} */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCanAccessRooms() {
      const storagedUser = localStorage.getItem("@RAuth:user");
      const response = await api.get(`/can_access/${JSON.parse(storagedUser).id}`).then(res => res);
      setData(response.data)
    }
    loadCanAccessRooms()
  }, [])

  return (
    <Container dataLength={data.length}>
      {data.map(room => (
        <RoomCard key={Math.random()}>
          <header>
            <h1> {room.name} </h1>
            <span> {room.total_users <= 1 ? `${room.total_users} usuário` : `${room.total_users} usuários`} </span>
          </header>
          <main>
            <p> Criado por <b> {room.created_by} </b> </p>

            <button> Entrar </button>
          </main>
        </RoomCard>
      ))}
    </Container>
  );
}

export default ListRooms;