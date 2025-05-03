// src/components/NavBar.jsx
import React from 'react';
import './NavBar.css'; // Import your CSS file for styling

function NavBar({ navigate }) {
  return (
    <nav className="navBar">
      <div className='logoContainer' >
        <div className='logo' role="button" onClick={() => navigate('HomePage')}>Spektakel</div>
      </div>
      <div className='navItems'>
      <ul>
        <li onClick={() => navigate('HomePage')}>Hem</li>
        <li onClick={() => navigate('FindMusiciansPage')}>Hitta musiker</li>
        <li onClick={() => navigate('AboutPage')}>Om oss</li>
        {/* Add more items as you create other pages */}
        {/* <li onClick={() => navigate('AboutPage')}>About</li> */}
      </ul>
      </div>
      
    </nav>
  );
}

export default NavBar;
