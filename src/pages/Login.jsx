import React           from 'react';
import BankForm        from './BankForm';
import { Card, Container } from 'react-bootstrap';

function Login() {
  

  return (
    <Container className='container'>
    <Card>

      <h2 className="card-header">Login</h2>
      <div className="card-body">
        
        <BankForm 
          hideEmail={true}
          formName="Login"
        />
      </div>
    </Card>
    </Container>
  )
}

export default Login;