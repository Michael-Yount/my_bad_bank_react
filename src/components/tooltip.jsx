import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipFunc() {
  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <div>{children}</div>
    </OverlayTrigger>
  );

  return (
    <div className='justify-content-end'>
    <ul className="navbar-nav">
        <li className="navbar-item" >
          <Link id="login" title="So surprised that you came back...">
            <a className="nav-link" data-tooltip="So surprised that your back..."aria-current="page"  href="#/Login">Login</a>
        </Link>{' '}
        </li>    
        <li className="navbar-item">
            <Link id="create-account" title="Don't say, I didn't warn you...">
            <a className="nav-link " aria-current="page"  href="#/CreateAccount">Create Account</a>
            </Link>{' '}
        </li>
        <li className="navbar-item">
            <Link id="deposit" title="You may never see your money again!">
        <a className="nav-link" aria-current="page" href="#/Deposit">Deposit</a>
             </Link>{' '}
        </li>
        <li className="navbar-item">
        <Link id="withdraw" title="Take it all out, while you still can.">
        <a className="nav-link" aria-current="page" href="#/Withdraw">Withdraw</a>
        </Link>{' '}
        </li>
        <li className="navbar-item">
        <Link id="customer-data" title="This is where customers info is kept.Don't hack this...">
        <a className="nav-link" aria-current="page" href="#/AllData">Customer Data</a>
        </Link>{' '}
        </li>
        <li className="navbar-item">
            <Link id="home" title="Yes, please go home, your money is no good here...">
        <a className="nav-link" aria-current="page" href="#/Home">Home</a>
        </Link>{' '}
        </li>
       
      </ul>
      </div>
  )
}



export default TooltipFunc;