import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Input from './shared/Components/FormElements/Input';
import Button from './shared/Components/FormElements/Button';
import {
  VALIDATOR_REQUIRE
} from './shared/util/validators';
import { useForm } from './shared/hooks/form-hook';

// import DUMMY_DATAS from './dummyDatas';

const Form = styled.form`
  list-style: none;
  margin: 0 auto;
  width: 90%;
`;

// const Dummy_board = DUMMY_DATAS;

const UpdatePlace = (props) => {

  const identifiedCard =  {
    id: props.id,
    title: props.title,
    date: props.date,
    exitDate: props.exitDate,
    company: props.company,
    platform: props.platform,
    contact: props.contact,
    email: props.email,
    type: props.type
  }

  const [isLoading, setIsLoading] = useState(true);
  // const cardId = useParams().cardId;
  // const userId = .userId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      date: {
        value: '',
        isValid: false
      },
      exitDate: {
        value: identifiedCard.exitDate,
        isValid: true
      },
      company: {
        value: identifiedCard.company,
        isValid: true
      },
      platform: {
        value: identifiedCard.platform,
        isValid: true
      },
      contact: {
        value: identifiedCard.contact,
        isValid: true
      },
      email: {
        value: identifiedCard.email,
        isValid: true
      },
      type: {
        value: identifiedCard.type,
        isValid: true
      }
    },
    false
  );

  // const loadedBoard = Dummy_board.filter(board => board.creator === userId);
  // console.log(loadedBoard)
  // // const identifiedCard = loadedBoard[0].cards.filter(c => c.id === cardId);
  // const identifiedCard = loadedBoard[0].cards[cardId];
  // console.log(identifiedCard)

  useEffect(() => {
    if (identifiedCard) {
      setFormData(
        {
          title: {
            value: identifiedCard.title,
            isValid: true
          },
          date: {
            value: identifiedCard.date,
            isValid: true
          },
          exitDate: {
            value: identifiedCard.exitDate,
            isValid: true
          },
          company: {
            value: identifiedCard.company,
            isValid: true
          },
          platform: {
            value: identifiedCard.platform,
            isValid: true
          },
          contact: {
            value: identifiedCard.contact,
            isValid: true
          },
          email: {
            value: identifiedCard.email,
            isValid: true
          },
          type: {
            value: identifiedCard.type,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData]);

  const cardUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedCard) {
    return (
      <div className="center">
          <h2>Could not find card!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Form onSubmit={cardUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Titre"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un titre valide."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="date"
        element="input"
        type="text"
        label="Date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez une date valide."
        onInput={inputHandler}
        initialValue={formState.inputs.date.value}
        initialValid={formState.inputs.date.isValid}
      />
      <Input
        id="exitDate"
        element="input"
        type="text"
        label="Date limite"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez une date limite valide."
        onInput={inputHandler}
        initialValue={formState.inputs.exitDate.value}
        initialValid={formState.inputs.exitDate.isValid}
      />
      <Input
        id="company"
        element="input"
        type="text"
        label="Entreprise"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez une entreprise valide."
        onInput={inputHandler}
        initialValue={formState.inputs.company.value}
        initialValid={formState.inputs.company.isValid}
      />
      <Input
        id="platform"
        element="input"
        type="text"
        label="Plateforme"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez une plateforme valide."
        onInput={inputHandler}
        initialValue={formState.inputs.platform.value}
        initialValid={formState.inputs.platform.isValid}
      />
      <Input
        id="contact"
        element="input"
        type="text"
        label="Contact"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un contact valide."
        onInput={inputHandler}
        initialValue={formState.inputs.contact.value}
        initialValid={formState.inputs.contact.isValid}
      />
      <Input
        id="email"
        element="input"
        type="text"
        label="Email"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un email valide."
        onInput={inputHandler}
        initialValue={formState.inputs.email.value}
        initialValid={formState.inputs.email.isValid}
      />
      <Input
        id="type"
        element="input"
        type="text"
        label="Type"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un Type valide."
        onInput={inputHandler}
        initialValue={formState.inputs.type.value}
        initialValid={formState.inputs.type.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Mettre à jour
      </Button>
    </Form>
  );
};

export default UpdatePlace;
