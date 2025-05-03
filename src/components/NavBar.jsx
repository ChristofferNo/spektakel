// src/components/NavBar.jsx
import React from 'react';
import '../assets/styles/NavBar.css'; // Optional: include if you plan to style it separately

function NavBar({ navigate }) {
  return (
    <nav className="navBar">
      <ul>
        <li onClick={() => navigate('HomePage')}>Hem</li>
        <li onClick={() => navigate('AboutPage')}>Om oss</li>
        <li onClick={() => navigate('FindMusiciansPage')}>Hitta musiker</li>
        {/* Add more items as you create other pages */}
        {/* <li onClick={() => navigate('AboutPage')}>About</li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
