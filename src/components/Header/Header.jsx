// components/Header.jsx
import React,{ useState} from 'react';
import  './Header.css';

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header className='globel-header'>
      <nav className='nav-bar'>
      <input type="checkbox" id="check" className="hamburger-checkbox" onChange={toggleNav} />
      <label htmlFor="check" className={`checkbtn ${isNavActive ? 'active' : ''}`}>
        <i className='fas fa-bars'></i>
      </label>
      <label className="logo">The Reactor</label>
     

      
        <ul >
          <li ><a  className='active' href="#home">Home</a></li>
          <li ><a  className='active' href="#about">About</a></li>
          <li ><a  className='active' href="#blog">Blog</a></li>
          <li ><a   className='active' href="#tutorials">Sign Up</a></li>
          <li ><a className='active' href="#resources">Resources</a></li>
          <li ><a className='active' href="#contact">Contact</a></li>
        </ul>
        
        
      </nav>
    </header>
  );
};
export default Header;
