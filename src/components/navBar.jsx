function NavBar(){
    return (
        <>
    <div className="container-fluid">
    <nav className="navbar navbar-expand-xl navbar-dark ">
      
    <div className="brand"><img src="../img/badBank.ico" alt=""/></div>
    <a className="navbar-brand" href="../pages/Home.jsx">
      My <span className="bad">Bad</span> Bank</a>
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="../pages/Register.jsx">Create Account</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="../pages/Login.jsx">Login</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="../pages/Deposit.jsx">Deposit</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="../pages/Register.jsx">Withdraw</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="../pages/Data.jsx">Balance</a>
        </li>
        <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="#/alldata/">All Data</a>
        </li>
       
      </ul>
    </div>
</nav>
    </div>
          , 
        </>
    );
}

export default NavBar;