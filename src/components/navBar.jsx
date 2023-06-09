import { Container } from "react-bootstrap";
import TooltipFunc from "./tooltip";
 



function NavBar(){
    return (
        <Container className="container-fluid">
    <div className="container">
    <nav className="navbar navbar-expand-xl navbar-dark ">
    <image src='../badbank.png'></image>
      
    <a className="navbar-brand" href="#/Home">
      My <span className="bad">Bad</span> Bank</a>
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <TooltipFunc/>
    </div>
</nav>
    </div>
           
        </Container>
    );
}

export default NavBar;

/*
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
*/ 