import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function CardLayout ({ children, card }) {
    if (card) {
        return (
            <Container>
                <Card
                style={{ margin: '2rem auto', maxWidth: '40rem' }}
                className='card'
                >
                    <Card.Header
                    style={{
                        backgroundColor: 'darkgray',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    >
                        {card}
                    </Card.Header>
                    <Card.Body>{children}</Card.Body>
                </Card>
            </Container>
        );
    } else {

    }
}

export default CardLayout;