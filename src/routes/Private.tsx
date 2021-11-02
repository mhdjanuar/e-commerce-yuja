import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface Props {
    component: React.FC<RouteComponentProps>,
    path: string,
    exact: boolean,
    auth?: boolean,
}

const PrivateRoutes: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => (
            <Component {...props} />
        )}
    />
);

export default PrivateRoutes;