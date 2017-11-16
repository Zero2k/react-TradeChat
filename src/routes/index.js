import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import isAuthenticated from '../services/auth';

import Home from './Home';
import Profile from './Profile';
import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import Layout from './Layout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
);

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/sign-up" exact component={Register} />
      <Layout>
        {/* Private Routes - Start */}
        <PrivateRoute path="/auth" exact component={Auth} />
        {/* Private Routes - End */}

        {/* Public Routes - Start */}
        <Route path="/" exact component={Home} />
        {/* Public Routes - End */}

        {/* Development Routes - Start */}
        <Route path="/profile" exact component={Profile} />
        <Route path="/symbol/:symbol" exact component={Layout} />
        {/* Development Routes - End */}
      </Layout>
    </Switch>
  </BrowserRouter>
);
