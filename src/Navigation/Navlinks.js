import React from 'react';
import {NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Links = styled.ul`
 display: flex;
 justify-content: space-around;
`;

const Navlinks = props => {
  return( 
  <Links>
    <li>
    <NavLink to="/u1/board">UserBoard</NavLink>
    </li>
    <li>Calendrier</li>
    <li>Notifications</li>
    <li>
      <NavLink to="/auth">Se connecter</NavLink>
    </li>
  </Links>
 )
};

export default Navlinks;