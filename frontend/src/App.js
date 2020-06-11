import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { AppProvider } from './context/app';

import Routes from './routes';

import GlobalStyles from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppProvider value={{ sidebarExtend: false }}>
          <AuthProvider value={{ signed: false }}>
            <Routes />
          </AuthProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
