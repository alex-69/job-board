import React, { useState } from 'react';

import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Card from './Card'
import NewCard from './NewCard'
import Modal from './shared/Components/UIElements/Modal'
import Button from './shared/Components/FormElements/Button';

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

  componentDidMount(){
    console.log(this.props)
  }
  shouldComponentUpdate(nextProps) {

    if(nextProps.cards === this.props.cards) {
      return false
    }
    return true
  }
  render(){
    return this.props.cards.map((card, index) =>(
    <Card key={card.id} card={card} index={index} {...this.props}/>
      ));
  }
}
const Column = props => {
  
  console.log(props)

  const [showCard, setShowCard] = useState(false);
 
  const openEditHandler = () => setShowCard(true);

  const closeEdiHandler = () => setShowCard(false);

  return (
    <React.Fragment>
      <Modal
        show={showCard}
        onCancel={closeEdiHandler}
        header={'Nouvelle fiche'}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeEdiHandler}>CLOSE</Button>}
      >
        <NewCard/>
      </Modal>
      <Draggable draggableId={props.column.id} index={props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {props.column.title}
            </Title>
            <Droppable droppableId={props.column.id} type="card">
              {(provided, snapshot) => (
                <CardList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList cards={props.cards} {...props} />
                  {provided.placeholder}
                </CardList>
              )}
            </Droppable>
            <Button className={'button'} href="#cards/new" onClick={openEditHandler}>Ajouter un fiche</Button>
        </Container>
        )}
      </Draggable> 
    </React.Fragment>
  )
}
export default Column;