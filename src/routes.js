import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Success from './pages/Success';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/success" component={Success} />
        </BrowserRouter>
    )
};

export default Routes;
