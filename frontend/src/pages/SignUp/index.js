import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container, Aside, DoneMessage } from './styles';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import Or from '../../components/Or';

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createdWithSuccess, setCreatedWithSuccess] = useState(false);

  const history = useHistory();

  // #04d261

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      const createdUser = await api.post('/user', {
        name,
        email,
        password
      });

      localStorage.setItem('@RAuth:user', JSON.stringify(createdUser.data.user));
      localStorage.setItem('@RAuth:token', createdUser.data.token);

      if (createdUser.status === 200) {
        setCreatedWithSuccess(true)

        setTimeout(() => {
          history.push('/')
          window.location.reload(false);
          setCreatedWithSuccess(false);
        }, 2000);
      }
    } catch {}
  }

  function handleTogglePasswordVisibility(state, setState) {
    if (state) {
      setState(false)
    }
    if (!state) {
      setState(true)
    }
  }

  return (
    <>
      <DoneMessage active={createdWithSuccess}> 
        <MdDone size={50} color="#04d261" /> 
        <h2> Cadastro realizado com sucesso! </h2>
        <p> Redirecionando... </p>
      </DoneMessage>
      <Container>
        <Aside>
          <img src={require('../../assets/Logo-Hermes.png')} alt="Logo"/>
          <h1>Criar a sua conta</h1>
          <form onSubmit={handleSignUp}>
            <input 
              type="text" 
              className="input-form" 
              placeholder="Nome"
              name="name"
              autoComplete="off"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input 
              type="text" 
              className="input-form" 
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div>
              <input 
                type={passwordVisible ? "text" : 'password'}
                className="input-form" 
                placeholder="Senha"
                name="password"
                autoComplete="off"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => handleTogglePasswordVisibility(passwordVisible, setPasswordVisible)}
              > 
                {passwordVisible ? <AiFillEyeInvisible color="#fff" size={25} /> : <AiFillEye color="#fff" size={25} />} 
              </button>
            </div>
            <button type="submit" className="button-form">Criar</button>
          </form>
          <Or />
          <div className="link">
            <Link to="/"> Já tenho uma conta </Link>
          </div>
        </Aside>
        <main></main>
      </Container>
    </>
  );
}

export default SignUp;