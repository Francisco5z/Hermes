import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

export default function AuthRoutes() {
  return (
    <>
      {/* Login */}
      <Route exact path="/" component={LoginPage} />
      
      {/* Sign up */}
      <Route path="/signup" component={SignUpPage} />
    </>
  )
}