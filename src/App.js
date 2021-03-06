import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import styled from 'styled-components';

import MainNavigation from './Navigation/MainNavigation';
import UserBoard from './UserBoard'


const Container = styled.main`
  margin-top:5rem;
`;
const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <Container>
        <Switch>
          <Route path="/" exact/>
          <Route 
            exact 
            path="/:userId/userboard" 
            component ={UserBoard}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
