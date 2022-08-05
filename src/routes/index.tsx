/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repository/:reponame*" element={<Repository />} />
  </Switch>
);

export default Routes;
