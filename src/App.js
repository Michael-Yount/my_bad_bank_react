import HashRouter from './context.jsx';
import NavBar from './navBar.jsx';
import UserContext from './context.jsx';

import './App.css';

  function Spa() {
    return (
        
        <HashRouter>
            <NavBar/>
                <UserContext.Provider>
                   
                </UserContext.Provider>  
            </HashRouter>
        
    );
 }

export default Spa;
