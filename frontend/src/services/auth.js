import api from './api';

export async function signIn(email, password) {
  try {
    const response = await api.post('/auth', { 
      email, 
      password 
    });

    return response;
  } catch (err) {
    return err?.response?.status;
  }
}