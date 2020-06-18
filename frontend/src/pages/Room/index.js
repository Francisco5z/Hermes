import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

function Room() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function loadWarnings() {
      const response = await api.get(`/room/warnings/${id}`);

      if (response.status === 200) {
        setData(response.data);
        return;
      }

      setError('Ocorreu um error ao fazer requisão ao servidor.');
    }
    loadWarnings();
  }, [id])

  return <div />;
}

export default Room;