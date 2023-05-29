import React           from 'react';
import { useContext }  from 'react';
import BankForm        from './BankForm.jsx';
import { UserContext } from '../App';

function Withdraw() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;

  return (
    <div className="card mb-3">
      <div className="card-header">Withdraw</div>
      <div className="card-body">
        <BankForm
          formName="Withdraw"
        />
      </div>
    </div>
  )
}

export default Withdraw;