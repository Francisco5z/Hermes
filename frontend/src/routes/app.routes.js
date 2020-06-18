import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreateRoom from '../pages/CreateRoom';
import Room from '../pages/Room';

function AppRoutes() {
  return (
    <>
      <Route exact path="/" component={Home}  /> 
      <Route path="/create-room" component={CreateRoom} />
      <Route path="/room/:id" component={Room} />
    </>
  );
}

export default AppRoutes;