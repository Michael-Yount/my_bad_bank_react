import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from "./navBar";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AllData from "./AllData";
import { createContext } from 'react';

export const UserContext = createContext(null)

function App() {
  return (
    <UserContext.Provider value={{ 

    users: [
      {
        username: 'Ash the Dog', email: 'woof@paws.com', password: 'hiddenbones', balance: 100
      },
      {
        username: 'Bubbles the clown', email: 'shoes@honk.com', password: 'squeekytoy', balance: 100
      }
    ],
  
    }}
    >
    <HashRouter>
      <NavBar/>
            <Routes>
              <Route path="/" exact          component={<Home />} />
              <Route path="/CreateAccount" component={<CreateAccount />} />
              <Route path="/Deposit"        component={<Deposit />} />
              <Route path="/Withdraw"       component={<Withdraw />} />
              <Route path="/AllData"       component={<AllData />} />
              <Route path="/Login"       component={<Login />} />
            </Routes>
    </HashRouter>
          </UserContext.Provider>
  );
}

export default App;