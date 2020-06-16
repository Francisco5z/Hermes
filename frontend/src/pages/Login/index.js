import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth';
import { Link } from 'react-router-dom';

import { Container, Logo, Content, ErrorMsg, Form, Main} from './styles';
import HermesLogo from '../../assets/Logo-Hermes.png';

import Or from '../../components/Or';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error } = useContext(AuthContext);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [error]);

  function handleSignIn(e) {
    e.preventDefault();

    signIn(email, password);
  }

  return (
    <Container>
      <Logo>
        <img src={HermesLogo} alt="Hermes logo" draggable='false' />
      </Logo>
      <Main>
        <Content on={error === null ? "true" : 'false'}>
          <Form>
            <ErrorMsg active={error === null}>
              {error}
            </ErrorMsg>
            <div>
              <input 
                type="text" 
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                autoComplete="off"
                className="input-form" 
                required
              />
            </div>
            <div>
              <input 
                type="text" 
                name="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha"
                autoComplete="off"
                className="input-form" 
                required
              />
            </div>
            <button className="button-form " onClick={handleSignIn}>Fazer login</button>
            <Or />
            <Link to="/signup">Não tenho uma conta</Link>
          </Form>
        </Content>
      </Main>
    </Container>
  );
}

export default Login;