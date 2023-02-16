import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({...props}) {
  return (
    <Route>
      {
        () => props.isLoggedIn ? <Route {...props} /> : <Redirect to='/sign-in' />
      }
    </Route>
  )
}