import { useContext } from 'react';
import { UserContext } from '../App';
import BankForm from './BankForm';
import { Card, Container } from 'react-bootstrap';
import pic from '../badbank.png'

function Home() {
  const ctx = useContext(UserContext);

  return (
    <Container className="container">
      <h1 className='header'>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
      <p className="welcome"><span className='welcome-word'>Welcome</span> to My Bad Bank, where your money is our money. No secrets, No security, thats our motto.</p>
      {ctx.loggedInUser ? (
        <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
        ) : (
        <Card className='card'>
          <BankForm
          formName="Login"
          />
        </Card>
        
        
          )}
    </Container>
  )
}

export default Home;