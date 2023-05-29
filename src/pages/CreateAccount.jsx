import React    from "react";
import BankForm from './BankForm';
import { Container } from "react-bootstrap";

function CreateAccount() {

  return (
    <Container className="container">

      <h2 className="card-header">Create Account</h2>
      <div className="card-body">
        <BankForm
          formName="Create Account"
        />
      </div>
    </Container>
  )
}

export default CreateAccount;