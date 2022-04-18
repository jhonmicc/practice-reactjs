import React from 'react';
import './Navbar.css';

const Navbar = ({ val }) => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>
          {val === '' ? 'My Contact' : val}
          {/* cara 1 */}
          {/* {navValueYangDikirimkan === ''
            ? 'About'
            : `${navValueYangDikirimkan}`} */}
          {/* cara 2 */}
          {/* kalau ga ada navValueYangDikirimkan, maka yang di set dahulu adalah 'About' */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
