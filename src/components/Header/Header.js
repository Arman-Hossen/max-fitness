import React from 'react';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
      <nav className='navbar bg-light p-4'>
         <div className='container-fluid flex'>
          
          <a className='navbar-brand d-flex' href="/">
            <img src={logo} alt="Logo" width="60" height="40" className='d-inline-block align-text-top me-3'/>

            <h2 className='text-primary'>Max-Fitness</h2>
            
            </a>
            
  
        </div>

      </nav>
    );
};

export default Header;