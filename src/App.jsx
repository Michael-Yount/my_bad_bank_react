/*import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import { BankProvider } from './utilities/Bankcontext.jsx';


import './App.css';

  function App() {

    return (
      <BankProvider>

        <div className='container'>
            <NavBar/>
            <Outlet/>  
         </div>
      </BankProvider>
    );
 }
*/
import { Route, HashRouter } from 'react-router-dom';
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
     <HashRouter>
            <NavBar/>
                    <Route path="/" exact component={Home} />
                    <Route path="/createaccount/"  component={CreateAccount} />
                    <Route path="/deposit/"  component={Deposit} />
                    <Route path="/withdraw/"  component={Withdraw} />
                    <Route path="/alldata/" component={AllData} />
            </HashRouter>
  </UserContext.Provider>
  
  );
}

export default App;
