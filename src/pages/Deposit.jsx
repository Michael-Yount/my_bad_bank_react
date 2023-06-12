import React           from 'react';
import { useContext }  from 'react'
import BankForm        from './BankForm';
import { UserContext } from '../App';
import { Card,Container, Row } from 'react-bootstrap';
import pic from '../badbank.png';

function Deposit() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;
  
  return (
    <Container className='container'>
        <div className='row'>
          <div className='col'>
            <p className='welcome'> <h2>When you are logged in here</h2> <br/> your information displays on the Customer Data page</p>
          </div>
          <div className='col'>
              <Card className="card">
                <h2 className="card-header">Deposit</h2>
                  <div className="card-body">
                    <BankForm
                      formName="Deposit"
                    />
                  </div>
                <img src={pic} className='homePageLogo'alt='logo'></img>
              </Card>
          </div>
        </div>
    </Container>
  )
}

export default Deposit;