import React, { useState } from 'react';
import { Link, Route, useRouteMatch} from 'react-router-dom' 

import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import Modal from './shared/Components/UIElements/Modal';
import UpdateCard from './UpdateCard'
import Button from './shared/Components/FormElements/Button';


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.isDragging ? 'lightgray' : 'white'};
`;
const IconCard= styled.span`
  :after {
    content:"";
    background-color: black;
    display: inline-block;
    width: 14px;
    height: 12px;
    float: right;
  }
`;
const TitleCard = styled.h3``;

const Card = (props) => {

  const match = useRouteMatch();

  
  const [showCard, setShowCard] = useState(false);
 
  const openEditHandler = () => setShowCard(true);

  const closeEdiHandler = () => setShowCard(false);
  
    return (
      <React.Fragment>
        <Draggable  draggableId={props.card.id} index={props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            > 
              <Link to= {`${match.url}/${props.card.id}`} onClick={openEditHandler}>
                <IconCard/>
                <TitleCard>{props.card.title}</TitleCard>
                <ul>
                  <li>{props.card.date}</li>
                  <li>{props.card.exitDate}</li>
                  <li>{props.card.company}</li>
                  <li>{props.card.platform}</li>
                  <li>{props.card.contact}</li>
                  <li>{props.card.email}</li>
                  <li>{props.card.type} </li>
                </ul>
              </Link> 
            </Container>
          )}
        </Draggable>
        <Modal
            show={showCard}
            onCancel={closeEdiHandler}
            header={props.card.title}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeEdiHandler}>CLOSE</Button>}
          >
            <Route path={`${match.path}'/:cardId`} exact>
              <p>hey!!!!</p>
            <UpdateCard
              id={props.card.id}
              title={props.card.title}
              date={props.card.date}
              exitDate={props.card.exitDate}
              company={props.card.company}
              platform={props.card.platform}
              contact={props.card.contact}
              email={props.card.email}
              type= {props.card.type}
            />
        </Route>
          </Modal>
      </React.Fragment>
    )
}

export default Card;