import React           from 'react';
import { useContext }  from 'react'
import BankForm        from './BankForm';
import { UserContext } from '../App';

function Deposit() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;
  
  return (
    <div className="card mb-3">
      <div className="card-header">Deposit</div>
      <div className="card-body">
        <BankForm
          formName="Deposit"
        />
      </div>
    </div>
  )
}

export default Deposit;