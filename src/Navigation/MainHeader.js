import React from 'react';

import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  display:flex;
`;
const MainHeader = props => {
return <Header>{props.children}</Header>
};

export default MainHeader;