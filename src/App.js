import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Board from './Board';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Board/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
