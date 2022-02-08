import { Link } from 'react-router-dom';
import React from 'react';
import '../header/Dropdown.css';

function Dropdown() {
  return <div className="dropdown">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span className="hello__signIn">Hello,Sign in</span><br/>
    <span className="accounts__lists">Account & Lists</span>
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <div className="signIn__signUp text-center">
    <Link className='signIn__btn text-decoration-none' to="/login">Sign in</Link>
      <p>New Customer? <Link className="signUp__btn text-decoration-none" to="/signup">Start here</Link></p>
    </div>
    <hr/>
    <div className="dropdown__inner">
      <div className="dropdown__inner__left">
        <h5>Your Lists</h5>
        <ul className='dropdown__lists'>
          <li>Create a List</li>
          <li>Find a List or Registry</li>
          <li>AmazonSmile Charity List</li>
        </ul>
      </div>
      <div className="dropdown__inner__right">
      <h5>Your Account</h5>
        <ul className='dropdown__lists'>
          <li>Accounts</li>
          <li>Orders</li>
          <li>Reccomendations</li>
          <li>Browsing History</li>
          <li>Watch List</li>
          <li>Video Purchases & Rentals</li>
          <li>Kindle Unlimited</li>
          <li>Content & Devices</li>
          <li>Subscribe & Save Items</li>
          <li>Memberships & Subscriptions</li>
          <li>Music Library</li>

        </ul>
      </div>
    </div>
  </ul>
</div>;
}

export default Dropdown;
