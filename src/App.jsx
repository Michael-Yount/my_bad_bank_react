import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { BankContext } from './utilities/Bankcontext.jsx';

import './App.css';

import NavBar from './components/navBar.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Data from './pages/AllData';
import Withdraw from './pages/Withdraw';

  function App() {

    return (
     <> 

  <div className='container'>

  <Router>
  <BankContext.Provider/>
    <NavBar/>
      <Routes>
           <Route exact path="./pages/Home.jsx" element={<Home/>} />
           <Route path="./pages/Deposit.jsx"  element={<Deposit />} />
           <Route path="./pages/AllData.jsx" element={<Data />} />
           <Route path="./pages/Login.jsx" element={<Login />} />
           <Route path="./pages/Withdraw.jsx" element={<Withdraw />} />
       </Routes>  
    </Router>
            <Login />
         </div>
         </>
    );
 }

/*import { Route, HashRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import AllData from './pages/AllData';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import { createContext } from 'react';
import './App.css';

export const UserContext = createContext(null);

function App() {
  return (
    
    <UserContext.Provider
      value={{
        users: [
         { 
          name: 'Michael',
          email: 'michael@mit.edu',
          password: 'secretMIT',
          balance: 100,
        }, 
        { 
          name: 'Sea',
          email: 'sea@mit.edu',
          password: 'secretMIT',
          balance: 100,
        }, 
        ],
      }}
  >
            <NavBar/>
     <HashRouter>
                    <Route path="/" exact component={Home} />
                    <Route path="/createaccount/"  component={CreateAccount} />
                    <Route path="/deposit/"  component={Deposit} />
                    <Route path="/withdraw/"  component={Withdraw} />
                    <Route path="/alldata/" component={AllData} />
            </HashRouter>
  </UserContext.Provider>
  
  );
}
*/

export default App;
