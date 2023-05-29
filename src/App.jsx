import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllData from "./pages/AllData";
import { createContext } from 'react';

export const UserContext = createContext(null)

function App() {
  return (
    <UserContext.Provider value={{ 

    users: [
      {
        username: 'michael', email: 'michael@mail.edu', password: 'secretMIT', balance: 100
      },
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