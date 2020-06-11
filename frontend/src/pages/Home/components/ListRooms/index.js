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
   * ]} data */
  const [data, setData] = useState([]);
  const [falseData, setFalseData] = useState([{
    _id: 1,
    name: 'A',
    total_users: 1
  }, {
    _id: 2,
    name: 'B',
    total_users: 2
  }, {
    _id: 3,
    name: 'C',
    total_users: 3
  }, {
    _id: 4,
    name: 'D',
    total_users: 4
  }, {
    _id: 5,
    name: 'E',
    total_users: 5
  }, {
    _id: 6,
    name: 'F',
    total_users: 6
  }, {
    _id: 1,
    name: 'A',
    total_users: 1
  }, {
    _id: 1,
    name: 'A',
    total_users: 1
  }, {
    _id: 1,
    name: 'A',
    total_users: 1
  }, {
    _id: 1,
    name: 'A',
    total_users: 1
  }, {
    _id: 1,
    name: 'A',
    total_users: 1
  }])

  useEffect(() => {
    async function loadCanAccessRooms() {
      const storagedUser = localStorage.getItem("@RAuth:user");
      const response = await api.get(`/can_access/${JSON.parse(storagedUser).id}`).then(res => res);
      setData(response.data)
    }
    loadCanAccessRooms()
  }, [])

  return (
    <Container>
      {falseData.map(room => (
        <RoomCard key={room._id}>
          <header>
            <h1> {room.name} </h1>
            <span> {room.total_users <= 1 ? `${room.total_users} usuário` : `${room.total_users} usuários`} </span>
          </header>
        </RoomCard>
      ))}
    </Container>
  );
}

export default ListRooms;