import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from './components/home/home';
import Layout from './hoc/layout';

const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  </div>
);

export default Routes
