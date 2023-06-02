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
    <TooltipFunc/>

    </div>
</nav>
    </div>
           
        </div>
    );
}

export default NavBar;