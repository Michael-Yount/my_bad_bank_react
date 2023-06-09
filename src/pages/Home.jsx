import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';
import BankForm from './BankForm';

function Home() {
  const ctx = useContext(UserContext);

  return (
    < div className="container">
      <image src={'require(../../public/badbank.jpg)'}></image>
      <p className="welcome"><span className='welcome-word'>Welcome</span> to My Bad Bank, where your money is our money. No secrets, No security, thats our motto.</p>
      <h1 className='header'>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
      {ctx.loggedInUser ? (
        <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
      ) : (
        
        <BankForm
          formName="Login"
        />
        
      )}
    </div>
  )
}

export default Home;