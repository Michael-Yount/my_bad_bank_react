import { useContext } from 'react';
import { UserContext } from '../App';
import BankForm from './BankForm';
import { Card, Container, Row } from 'react-bootstrap';
import pic from '../badbank.png'

function Home() {
  const ctx = useContext(UserContext);

  return (
    <Container className="container">
          <h1 className='header'>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
      <Row>
        <div className='row'>
          <div className='col'>
              <p className="welcome"><span className='welcome-word'>Welcome</span> to My Bad Bank. <br /> The bank where your money is our money. <br /> No secrets, No security, thats our motto.</p>
              </div>
            <div className='col'>
            {ctx.loggedInUser ? (
            <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
             ) : (
                  <Card className='card'>
                      <BankForm
                      formName="Home"
                      />
                    <img src={pic} className='homePageLogo'alt='logo'></img>
                  </Card>
        )}
        </div>
        </div>
      </Row>
    </Container>
  )
}

export default Home;