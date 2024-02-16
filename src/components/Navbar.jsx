import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-between" }}>
        
        <li><Link to="/">Home</Link></li>

        <li><Link to="/accommodations">Accommodations</Link></li>

        <li><Link to="/attractions">Attractions</Link></li>

        <li><Link to="/transportation">Transportation</Link></li>

        <li><Link to="/planning-tools">Planning Tools</Link></li>

        <li>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </li>
      </ul>
    </nav>
  );
};
