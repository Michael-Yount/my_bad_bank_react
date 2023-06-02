import TooltipFunc from "./tooltip";



function NavBar(){
    return (
        <div className="container">
    <div className="container-fluid">
    <nav className="navbar navbar-expand-xl navbar-dark ">
      
    <a className="navbar-brand" href="#/Home">
    <img src="/src/badbank.jpg" alt="bb" width="30" height="30"></img>
      My <span className="bad">Bad</span> Bank</a>
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className="navbar-item">
            <a className="nav-link active " aria-current="page"  href="#/Login">Login</a>
        </li>
        <li className="navbar-item">
            <a className="nav-link active " aria-current="page"  href="#/CreateAccount">Create Account</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/Deposit">Deposit</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/Withdraw">Withdraw</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/AllData">Customer Data</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/Home">Home</a>
        </li>
       
      </ul>
    </div>
</nav>
    </div>
           
        </div>
    );
}

export default NavBar;

/*
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
*/ 