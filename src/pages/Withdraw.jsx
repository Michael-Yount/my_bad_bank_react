import React           from 'react';
import { useContext }  from 'react';
import BankForm        from './BankForm.jsx';
import { UserContext } from '../App';
import { Card, Container} from 'react-bootstrap';
import pic from '../badbank.png'

function Withdraw() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;

  return (
    <Container className="container">
      <div className='row'>
        <div className='col'>
          <p className='welcome'><span className='welcome-word'>When</span> you are logged in you can enjoy 
          <br/>futuristing banking practices. 
              <br/> <span className='highlighted-text-welcome'></span> 
              <br/> <span className='highlighted-text-welcome'></span> 
              <br/> <span className='highlighted-text-welcome'></span> 
          </p>
        </div>
          <div className='col'>
            <Card className="card">
              <h2 className="card-header">Withdraw</h2>
                <div className="card-body">
                  <BankForm
                    formName="Withdraw"
                    />
                </div>
              <img src={pic} className='homePageLogo'alt='logo'></img>
            </Card>
          </div>
        </div>
    </Container>
  )
 
}

export default Withdraw;