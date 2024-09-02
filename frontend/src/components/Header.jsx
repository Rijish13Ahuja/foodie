import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Foodie</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/kitchen-detail" className="hover:underline">Kitchen Details</Link></li>
        <li><Link to="/order-history" className="hover:underline">Order History</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
