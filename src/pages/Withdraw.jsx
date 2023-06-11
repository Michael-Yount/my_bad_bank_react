import React           from 'react';
import { useContext }  from 'react';
import BankForm        from './BankForm.jsx';
import { UserContext } from '../App';
import { Card, Container} from 'react-bootstrap';

function Withdraw() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;

  return (
    <Container className="container">
      <Card className="card">
      <h2 className="card-header">Withdraw</h2>
      <div className="card-body">
        <BankForm
          formName="Withdraw"
        />
      </div>
      </Card>
    </Container>
  )
 
}

export default Withdraw;