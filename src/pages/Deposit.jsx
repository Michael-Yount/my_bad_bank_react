import React           from 'react';
import { useContext }  from 'react'
import BankForm        from './BankForm';
import { UserContext } from '../App';
import { Container } from 'react-bootstrap';

function Deposit() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;
  
  return (
    <Container className='container'>

      <h2 className="card-header">Deposit</h2>
      <div className="card-body">
        <BankForm
          formName="Deposit"
        />
      </div>
    </Container>
  )
}

export default Deposit;