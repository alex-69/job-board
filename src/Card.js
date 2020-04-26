import React from 'react';

import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.isDragging ? 'lightgray' : 'white'};
`;

const TitleCard = styled.h3``;

export default class Card extends React.Component {
  render() {
    return (
      <Draggable  draggableId={this.props.card.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <TitleCard>{this.props.card.title}</TitleCard>
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
        )}
      </Draggable>
    )
  }
}