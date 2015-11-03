import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';

var routes = 
  <Router>
    <Route path='app' path='/' component={ App }>
      <Route path='info' component={ Info } />
      <Route path='home' component={ Home } />
      <IndexRoute component={Home}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
;

export default routes;