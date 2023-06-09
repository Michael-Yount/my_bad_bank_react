import React        from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../App';
import { Container } from 'react-bootstrap';

function BankForm({formName, hideEmail}){
  const ctx = useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState('');
  const [disabled, setDisabled] = useState(false);

  const clearForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

      

    setErrorMessage('');
    const userExists = ctx.users.find(user => user.username === username);
    const userEmailExists = ctx.users.find(user => user.email === email);
    if (formName === "Login") {
      // Handle Login Form
      if (!userExists) {
        setErrorMessage('This is not a user.');
        return;
      }
      if (userExists.password !== password) {
        setErrorMessage('Please enter a correct password.');
        return;
      }
      ctx.loggedInUser = username;   
      setSuccessMessage('You are logged in ' + username);
    }
    if (formName === "Create Account") {
      // Handle Create Account Form
      if (userExists || userEmailExists) {
        setErrorMessage('This user has already been registered. Please log in.');
      }
      if (!username) {
        setErrorMessage('You must enter a user name.');
        setSuccessMessage('');
        return;
      }
      if (!email) {
        setErrorMessage('Please enter your email address.');
        setSuccessMessage('');
        return;
      }
      if (password.length < 8) {
        setErrorMessage('Password must be more than 8 characters.');
        setSuccessMessage('');
        return;
      }
      ctx.users.push({ "username": username, "email": email, "password": password, "balance": 100 });
      ctx.loggedInUser = username;
      clearForm();
      setSuccessMessage('You are logged in' + username);
    }
    if (formName === "Deposit" || formName === "Withdraw") {
      // Handle Deposit / Withdraw
      if(amount) {
        const currentUser = ctx.users.find(user => user.username === ctx.loggedInUser);
        let prevBalance = currentUser.balance;
        if (formName === "Deposit") {
          currentUser.balance = Number(prevBalance) + Number(amount);
        } else /* withdraw */ {
          if (currentUser.balance >= Number(amount)) {
            currentUser.balance = Number(prevBalance) - Number(amount);
          } else {
            setErrorMessage(`Transaction failed, you can't withdraw more than your account balance.`);
          }
        }
        setAmount('0');
      }
      else {
        setErrorMessage('Please enter an amount first.');
        return;
      }
    }
  }

  const renderFormInputs = () => {
    if (formName === "Deposit" || formName === "Withdraw") {
      if (ctx.loggedInUser) {
        const currentUser = ctx.users.find(user => user.username === ctx.loggedInUser);
        return (
          <>
            <div className="form-group">
              <p className="mt-3 text-success user"data-testid="username">Account Balance: ${currentUser.balance}</p>
              Amount<br/>
              <input type="number" className="form-control" id="amount"
              value={amount} min="0" max={currentUser.balance} onChange={e => setAmount(e.currentTarget.value)} /><br/>
            </div>
            <button type="submit" className="btn btn-light" onClick={handleFormSubmit}disabled={false}>Deposit</button>
          </>
        )
      }
      else {
        return 'Please log in.';
      }
    }
    else
    {

      const emailChange = (e) => {
        setEmail(e.currentTarget.value);
        setDisabled(false);
      }


      return (
        <Container className='container'>

          <div className="form-group">
            Name<br/>
            <input type="input" className="form-control input" id="name"
            placeholder="Username" value={username} onChange={ e => setUsername(e.currentTarget.value)} /><br/>
          </div>
          {!hideEmail && (
            <div className="form-group">
              Email<br/><input type="input" className="form-control input" id="email"
              placeholder="Email" value={email} onChange={emailChange} /><br/>
            </div>
          )}
          <div className="form-group">
            Password<br/>
            <input type="password" className="form-control input" id="password"
            placeholder="Password" value={password} onChange={ e => setPassword(e.currentTarget.value)} /><br/>
          </div>
          <button type="submit" className="btn btn-light" onClick={handleFormSubmit} disabled={false}>{formName}</button>
        </Container>
      
      )
    }
  }

  return (
    <>
      <form>
        {renderFormInputs()}
      </form>
      {errorMessage && <div className="alert alert-danger mt-3" role="alert">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success mt-3" role="alert">{successMessage}</div>}
    </>
  )  
}

export default BankForm;