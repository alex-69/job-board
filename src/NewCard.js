import React from 'react';

import styled from 'styled-components';

import Input from './shared/Components/FormElements/Input';
import Button from './shared/Components/FormElements/Button';
import {
  VALIDATOR_REQUIRE
} from './shared/util/validators';
import { useForm } from './shared/hooks/form-hook';

const Form = styled.form`
  list-style: none;
  margin: 0 auto;
  width: 90%;
`;

const NewCard = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      exitDate: {
        value: '',
        isValid: false
      },
      company: {
        value: '',
        isValid: false
      },
      platform: {
        value: '',
        isValid: false
      },
      contact: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      type: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <Form onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="date"
        element="input"
        type="text"
        label="Date"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="exitDate"
        element="input"
        type="text"
        label="ExitDate"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="company"
        element="input"
        type="text"
        label="Company"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="platform"
        element="input"
        type="text"
        label="Platform"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="contact"
        element="input"
        type="text"
        label="Contact"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="email"
        element="input"
        type="text"
        label="Email"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="type"
        element="input"
        type="text"
        label="Type"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        AJOUTER LA FICHE
      </Button>
    </Form>
  );
};

export default NewCard;
