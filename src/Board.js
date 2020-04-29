import React from 'react';

import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './column';

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, cardMap, index} = this.props;
    const cards = column.cardIds.map(cardId => cardMap[cardId]);
    return(
      <Column column={column} cards={cards} index={index}/>
    );
  }
}
class Board extends React.PureComponent {
  state = this.props.items;
  componentDidMount(){
    console.log(this.props)
  }
  onDragStart = () => {
    document.body.style.color = 'green';
    document.body.style.transition = 'background-color 0.2s ease';

  };

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ? destination.index / Object.keys(this.state.cards).length: 0;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${opacity})`;
  }

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId, type } = result;

    if (!destination) {
        return;
    };

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
        return;
    };

    if(type === 'column') {
      const newColumnOrder= Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
  
      this.setState(newState);
      return;
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) { 
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
        [newColumn.id]: newColumn,
        },
      };

      this.setState (newState);
      return;
  };

  //moving from one list to another
  const startCardIds = Array.from(start.cardIds);
  startCardIds.splice(source.index, 1);
  const newStart = {
    ...start,
    cardIds: startCardIds,
  };

  const finishCardIds = Array.from(finish.cardIds);
  finishCardIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    cardIds: finishCardIds,
  };
    
  
  const newState = {
    ...this.state,
    columns: {
      ...this.state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    }
  }

  this.setState(newState);
  return;
}

  render() {
    
    return (
      <DragDropContext onDragEnd={this.onDragEnd} // onDragStart= {this.onDragStart} onDragUpdate= {this.onDragUpdate}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <Container
             {...provided.droppableProps}
             ref={provided.innerRef}
            >
              
              {this.state.columnOrder.map((columnId, index)=> {
                const column = this.state.columns[columnId];

                return (
                  <InnerList
                    key={column.id}
                    column={column} 
                    cardMap={this.state.cards} 
                    index={index}/>
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}


export default Board;