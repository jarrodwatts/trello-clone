import { Container } from '@material-ui/core';
import React, { ReactElement } from 'react';
import FormContainer from '../components/auth/FormContainer';
import SignUpForm from '../components/auth/SignUpForm';

export default function Signup(): ReactElement {
  return (
    <div style={{ background: '#f9fafc' }}>
      <Container maxWidth='xs'>
        <FormContainer form={<SignUpForm />} type='signup' />
      </Container>
    </div>
  );
}
