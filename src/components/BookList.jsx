import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the other way</li>
        <li style={{ background: theme.ui }}>the final way </li>
      </ul>
    </div>
  );
};

export default BookList;
