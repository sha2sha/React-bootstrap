import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import { routes } from '../routesConfig';

const history = createBrowserHistory();

class Routes extends React.Component<any, any> {

    renderRoutes(routes) {
        let routeList = [];
        routes.forEach((route) => {
            routeList.push(
                <Route
                    exact
                    key={route.path}
                    path={route.path}
                    component={route.component}
                />
            );
            if (route.childRoutes && route.childRoutes.length > 0) {
                routeList = routeList.concat(this.renderRoutes(route.childRoutes));
            }
        });
        return routeList;
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.renderRoutes(routes)}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
