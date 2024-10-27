import React, { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import './navBar.css';
import logo from '../../assets/logo.png';
import profileImage from '../../assets/profile_img.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['movies', 'series'];

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className='logo'>
          <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-left">
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Series</li>
          </ul>
          </div>
          <div className='items'>
          <button onClick={toggleList}>
            {isOpen ? '˅' : '>'} {/* Toggle symbol */}
            Myliste
          </button>
            {isOpen && (
              <ul className='list1'>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            </div>
      <div className="navbar-right">
        <FaSearch />
        <FaBell />
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
