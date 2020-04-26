import React from 'react';
import {Link } from 'react-router-dom';

import styled from 'styled-components';

const Links = styled.ul`
 display: flex;
 justify-content: space-around;
`;

const Navlinks = props => {
  return( 
  <Links>
    <li>
    <Link to="u1/board">UserBoard</Link>
    </li>
    <li>Calendrier</li>
    <li>Notifications</li>
    <li>
      <Link to="/auth">Se connecter</Link>
    </li>
  </Links>
 )
};

export default Navlinks;