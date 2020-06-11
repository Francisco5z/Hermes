import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import AuthContext from '../context/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      {signed ? <AppRoutes /> : <AuthRoutes />}
      {/* <AuthRoutes /> */}
    </Switch>
  )
}