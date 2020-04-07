import React from 'react';
import CNavBar from '../../components/CNavBar';
import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Routes = () => (
    <Router>
        <CNavBar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details/:id" component={DetailsPage} />
        </Switch>
    </Router>
)