import { Outlet } from 'react-router-dom';
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

export default App;
