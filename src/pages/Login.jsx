import React           from 'react';
import BankForm        from './BankForm';

function Login() {
  

  return (
    <div className='container'>

      <h2 className="card-header">Login</h2>
      <div className="card-body">
        
        <BankForm 
          hideEmail={true}
          formName="Login"
        />
      </div>
    </div>
  )
}

export default Login;