import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default class Card extends React.Component {
  render() {
    return (
      <Container>
        {this.props.card.title}
          <ul>
            <li>{this.props.card.date}</li>
            <li>{this.props.card.exitDate}</li>
            <li>{this.props.card.company}</li>
            <li>{this.props.card.platform}</li>
            <li>{this.props.card.contact}</li>
            <li>{this.props.card.email}</li>
            <li>{this.props.card.type} </li>
          </ul>
      </Container>
    )
  }
}