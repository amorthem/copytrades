import React, { Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Page/Home';
import Copytrade from './Page/Copytrade';
import Dex from './Page/Dex';


    const Error404 = () => <h1 className="text-center"><br/><br/><img src="https://cdn4.iconfinder.com/data/icons/gradient-5/50/453-512.png" width="35%"/><br/><br/></h1>

export default class App extends Component {
  render() {
    return (
      <>
          <Switch>
            <Route exact path="/copytrades" component={Home}>
              <Home />
            </Route>
            <Route exact path="copytrades/copytrade">
              <Copytrade />
            </Route>
            <Route exact path="copytrades/dex">
              <Dex />
            </Route>
            <Route exact path="*">{Error404}</Route>
          </Switch>
      </>
      
    )
  }
}