import React from 'react';
import { useContext } from 'react';
import Login from './Login';
import { BankContext } from '../utilities/Bankcontext';

function Home() {
  const ctx = useContext(BankContext);

  return (
    <div className="container">
      <h1>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
      {ctx.loggedInUser ? (
        <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
      ) : (
        <Login/>
      )}
      <p className="text-danger">In all of our SIX months in business. We almost have never lost anyones money or accidentally given it away. <br/>
      So please feel free to leave some of your money and take someone elses.</p>
    </div>
  )
}

export default Home;