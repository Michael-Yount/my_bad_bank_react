import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllData from "./pages/AllData";
import { BankContext } from './utilities/Bankcontext';

function App() {
  const defaultContext = {
    loggedInUser: null,
    users: [
      {
        username: 'michael', email: 'michael@mail.edu', password: 'secretMIT', balance: 100
      }
    ]
  };
  return (
    <BrowserRouter>
      <NavBar/>
        <div className="container mt-3">
          <BankContext.Provider value={defaultContext}>
            <Routes>
              <Route path="/" exact          element={<Home/>} />
              <Route path="/create-account/" element={<CreateAccount/>} />
              <Route path="./pages/Deposit.jsx"        element={<Deposit/>} />
              <Route path="/withdraw/"       element={<Withdraw/>} />
              <Route path="/all-data/"       element={<AllData/>} />
            </Routes>
          </BankContext.Provider>
        </div>
    </BrowserRouter>
  );
}

export default App;