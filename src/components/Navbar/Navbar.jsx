import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='bg-slate-700 z-50 fixed top-0 right-0 left-0 text-white p-5'>
      <div className='px-4 sm:px-8 lg:px-32 flex flex-wrap justify-between mx-auto'>
        <div>
          <Link to="/" className='text-3xl font-display uppercase font-bold'>
            Start Framework
          </Link>
        </div>

        <div className='uppercase text-lg font-semibold mt-1'>
          <ul className='flex flex-wrap gap-5'>
            <li>
              <NavLink 
                to="/About" 
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Protfolio" 
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Contact" 
        
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
