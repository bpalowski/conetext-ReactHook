import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>NavBar</h1>
      <p>Currently you have {books.length}</p>
    </div>
  );
};

export default Navbar;
