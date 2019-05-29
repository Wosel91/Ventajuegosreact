/* eslint-disable prettier/prettier */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    // eslint-disable-next-line
    render={props => (this.props.auth ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)
    }
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.object,
};
export default PrivateRoute;
