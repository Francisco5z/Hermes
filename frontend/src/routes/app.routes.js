import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

function AppRoutes() {
  return (
    <>
      <Route exact path="/" component={Home}  /> 
      <Route path="/create-room" component={() => <h1> Criar uma sala </h1>} />
    </>
  );
}

export default AppRoutes;