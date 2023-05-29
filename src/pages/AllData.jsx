import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';
import { Container } from 'react-bootstrap';

function AllData() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;

  const printRows = () => {
    const users = ctx.users;
    const userTable = users.map(user => {
      return (
        <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.balance}</td>
        </tr>
      )
    })
    return userTable;
  }

  return (
    <Container className='container'>

    <div className="card mb-3">
      <h2 className="card-header">Customer Data</h2>
      <div className="card-body">
        <table className="table">
          <thead>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </thead>
          <tbody>
            {printRows()}
          </tbody>
        </table>
        {loggedInUser && <p><b className="capitalize">{loggedInUser}</b> is logged in.</p>}
      </div>
    </div>
    </Container>
  )
}

export default AllData;