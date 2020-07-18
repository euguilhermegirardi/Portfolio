import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
        </BrowserRouter>
    )
};

export default Routes;
