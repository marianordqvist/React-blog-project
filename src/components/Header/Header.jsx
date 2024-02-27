// components/Header.jsx
import React,{ useState} from 'react';
import  './Header.css';
import ReactJS from './ReactJS.gif';

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header className='global-header'>
      <nav className='nav-bar'>
     {/*
      <input type="checkbox" 
      id="check" className="hamburger-checkbox"
       onChange={toggleNav} 
        aria-hidden="true" />
      <label htmlFor="check" className={`checkbtn ${isNavActive ? 'active' : ''}`} aria-label="Toggle Navigation">
  <i className='fas fa-bars'></i>
      </label>*/}

      <label className="logo">
        <img src={ReactJS} alt="React Logo" className='react-logo'/>
        The Reactor</label>
      
        <ul className='ul-nav' >
          <li className='ul-list' ><a className="active" href="#home" >Home</a></li>
          <li  className='ul-list'><a   className='active' href="#signsup">Sign Up</a></li>
          <li  className='ul-list'><a className='active' href="#contact">Contact</a></li>
        </ul>
        
       
      </nav>
    </header>
  );
};
export default Header;
