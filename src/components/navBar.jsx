import { Container } from "react-bootstrap";
import TooltipFunc from "./tooltip";
import logo from '../badbank.png';



function NavBar(){
    return (
     <Container>
      <nav className="navbar navbar-expand-xl navbar-dark ">
       <div className="container-fluid">
          <a className="navbar-brand" href="#/Home">
              <img src={logo} alt="logo" className="logo"></img>
              My <span className="bad">Bad</span> Bank
          </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <TooltipFunc/>
          </div>
        </div> 
      </nav>
    </Container>
    );
}

export default NavBar;
