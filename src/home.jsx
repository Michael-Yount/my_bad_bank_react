import Card from "./context";

function Home() {

    return (
      <Card
        bgcolor="grey"
        textcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank at your own risk"
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        body={(<img src="./img/badBank.png" className="img-fluid"
        alt="Responsive image"/>)}
      />
    );
}

export default Home;