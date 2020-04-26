import React from 'react';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';
import Card from './Card'


const Container = styled.div`
  background-color: white;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 280px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  padding: 8px;
`;
const CardList = styled.div`
  padding: 8px;
  background-color: ${props => props.isDraggingOver ? 'skyblue' : 'inherit'};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps.cards === this.props.cards) {
      return false
    }
    return true
  }
  render(){
    return this.props.cards.map((card, index) =>(<Card key={card.id} card={card} index={index}/>
      ));
  }
}
export default class Column extends  React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.column.id} index={this.props.index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>
            {this.props.column.title}
          </Title>
          <Droppable droppableId={this.props.column.id} type="card">
            {(provided, snapshot) => (
              <CardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList cards={this.props.cards} />
                
                {provided.placeholder}
              </CardList>
            )}
          </Droppable>
      </Container>
      )}
    </Draggable>
      
    )
 }
}