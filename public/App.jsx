import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from "./navBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Deposit from "./pages/Deposit";
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
              <Route path="/Home" exact          element={<Home />} />
              <Route path="/CreateAccount" element={<CreateAccount />} />
              <Route path="/Deposit"        element={<Deposit />} />
              <Route path="/Withdraw"       element={<Withdraw />} />
              <Route path="/AllData"       element={<AllData />} />
              <Route path="/Login"       element={<Login />} />
            </Routes>
    </HashRouter>
          </UserContext.Provider>
  );
}

export default App;