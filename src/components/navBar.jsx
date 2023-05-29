function NavBar(){
    return (
        <>
    <div className="container-fluid">
    <nav className="navbar navbar-expand-xl navbar-dark ">
      
    <div className="brand"><img src="../img/favicon-32x32.png" alt=""/></div>
    <a className="navbar-brand" href="#/Home">
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
        <a className="nav-link active" aria-current="page" href="#/Deposit">Deposit</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/Withdraw">Withdraw</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/AllData">Data</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/Home">Home</a>
        </li>
       
      </ul>
    </div>
</nav>
    </div>
           
        </>
    );
}

export default NavBar;