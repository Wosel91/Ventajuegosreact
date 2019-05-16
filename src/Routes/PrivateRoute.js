import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component,...rest }) => (
    <Route {...rest} render={props => (
        this.props.auth ? <Component  {...props} />
            : <Redirect to={{ pathname: '/login' }} />
    )} />
)