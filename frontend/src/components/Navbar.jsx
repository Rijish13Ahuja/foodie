import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-700 text-white py-2">
    <ul className="container mx-auto flex justify-around">
      <li><Link to="/" className="hover:underline">Home</Link></li>
      <li><Link to="/kitchen-detail" className="hover:underline">Kitchen Details</Link></li>
      <li><Link to="/order-history" className="hover:underline">Order History</Link></li>
    </ul>
  </nav>
);

export default Navbar;
