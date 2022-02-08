import { Link, Menu } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SidebarData } from './SidebarData';
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

  return <div className='navbar'>
        <div className='menu-bars'>
            <span className='menu-text sidebar-toggle'><Menu/>All</span>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to="#" className='menu-bars'>
                <Close/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    <span>{item.title}</span>                  
                </li>
              );
            })}
          </ul>
        </nav>
  </div>;

}

export default Navbar;
