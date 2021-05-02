import { Container } from '@material-ui/core';
import React, { ReactElement } from 'react';
import FormContainer from '../components/auth/FormContainer';
import VerifyForm from '../components/auth/VerifyForm';

export default function Login(): ReactElement {
  return (
    <div style={{ background: '#f9fafc' }}>
      <Container maxWidth='xs'>
        <FormContainer
          // passedThroughEmail is used when the email gets passed from phase 1 to phase 2 of the signup process.
          // when the user accesses /verify/ directly, we don't know their email.
          // but the email is required to send the verification code.
          form={<VerifyForm passedThroughEmail={''} />}
          type='verify'
        />
      </Container>
    </div>
  );
}
1;
