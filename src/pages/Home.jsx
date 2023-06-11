import { useContext } from 'react';
import { UserContext } from '../App';
import BankForm from './BankForm';
import { Card, Container, Row } from 'react-bootstrap';
import pic from '../badbank.png'

function Home() {
  const ctx = useContext(UserContext);

  return (
    <Row >
    <Container className="container">
  <div class="row">
      <h1 className='header'>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
          <div class="col">
        1 of 2
      <p className="welcome"><span className='welcome-word'>Welcome</span> to My Bad Bank, where your money is our money. No secrets, No security, thats our motto.</p>
      {ctx.loggedInUser ? (
        <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
        ) : (
          <Card className='card'>
          <BankForm
          formName="Home"
          />
        </Card>
        
        
        )}
        </div>
    <div class="col">
      2 of 2
        <img src={pic} className='homePageLogo'alt='logo'></img>
    </div>
  </div>
    </Container>
    
    </Row>
  )
}

export default Home;