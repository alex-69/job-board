import React from 'react';

import styled from 'styled-components';
import Card from './Card'


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const CardList = styled.div`
  padding: 8px;
`;

export default class Column extends  React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <CardList>
          {this.props.cards.map(card => <Card key={card.id} card={card}/> )}
        </CardList>
      </Container>
    )
 }
}