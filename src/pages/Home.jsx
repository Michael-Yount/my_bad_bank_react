import Card from 'react-bootstrap/Card';
import CardLayout from '../components/CardLayout';

const Home = () => {

    return (
      <CardLayout>
        <Card style={{ margin: '2rem auto', width: '40rem' }} className='card'>
          <div 
            style={{
              height: '20rem',
              background: 
               'linear-gradient(70 deg, #6b205bcc, #b47bd3cf) 0% 35% / cover , url(./img/badBank.png) center to top no-repeat',
               backgroundSize: 'cover',
               borderRadius: '10px',
            }}
            >
              <Card.Body>
                <Card.Title
                  style={{ color: '#7c1a67', fontWeight: '800', fontSize: "1.5rem" }}
                  >
                    Welcome to <span style={{color: 'red'}}>Bad</span> Bank;
                  </Card.Title>
                  <Card.Text>
                    Welcome to the no-frills, no security, no service, Bank. We truly hope that you put alot of money in the bank so we all can withdraw some. While you are here feel free to withdraw money from other accounts and fill your account with Cash!
                  </Card.Text>
              </Card.Body>
            </div>
        </Card>
      </CardLayout>
    );
}

export default Home;