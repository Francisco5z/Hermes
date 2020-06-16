import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreateRoom from '../pages/CreateRoom';

function AppRoutes() {
  return (
    <>
      <Route exact path="/" component={Home}  /> 
      <Route path="/create-room" component={CreateRoom} />
    </>
  );
}

export default AppRoutes;