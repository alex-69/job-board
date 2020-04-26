import React from 'react';

import MainHeader from './MainHeader';
import Navlinks from './Navlinks';

import styled from 'styled-components';

const Title = styled.h1`
  flex-basis: 60%;
`;

const Nav = styled.nav`
flex-basis: 40%;
`;


const MainNavigation = props => {
  return (
    <MainHeader>
      <Title>JOB BOARD</Title>
      <Nav>
        <Navlinks/>
      </Nav>
    </MainHeader>

)
};

export default MainNavigation; 