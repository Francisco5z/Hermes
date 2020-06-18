import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Link } from 'react-router-dom';

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
      setLoading(true)

      const storagedUser = localStorage.getItem("@RAuth:user");
      
      const response = await api.get(`/can_access/${JSON.parse(storagedUser).id}`).then(res => res);
      setData(response.data)

      setLoading(false);
    }
    loadCanAccessRooms()
  }, [])

  return (
    <Container dataLength={data.length}>
      {data.map(room => (
        <RoomCard key={Math.random()}>
          <div>
            <h1> {room.name} </h1>
            <span> {room.total_users <= 1 ? `${room.total_users} usuário` : `${room.total_users} usuários`} </span>
          </div>
          <div>
            <p> Criado por  {room.created_by} </p>

            <Link to={`/room/${room._id}`}> Entrar </Link>
          </div>
        </RoomCard>
      ))}
    </Container>
  );
}

export default ListRooms;