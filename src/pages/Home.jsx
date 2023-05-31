import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';
import BankForm from './BankForm';

function Home() {
  const ctx = useContext(UserContext);

  return (
    <div className="container">
      <h1 className='header'>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
      {ctx.loggedInUser ? (
        <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
      ) : (
        <BankForm
          formName="Login"
        />
        
      )}
      <p className="text-danger">In all of our SIX months in business. We almost have never lost anyones money or accidentally given it away. <br/>
      So please feel free to leave some of your money and take someone elses</p>
    </div>
  )
}

export default Home;