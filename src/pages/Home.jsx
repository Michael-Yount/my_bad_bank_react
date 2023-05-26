import Card from 'react-bootstrap/Card';

function Home() {

    return (
      <Card
        bgcolor="grey"
        textcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank at your own risk"
        body={(<img src="./img/badBank.png" className="img-fluid"
        alt=''/>)}
      />
    );
}

export default Home;