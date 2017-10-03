import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Body from './components/Body';


export default (
  <switch>
    <Route component={Body} exact path="/" />
  </switch>
)
