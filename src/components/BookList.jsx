import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLight, light, dark } = context;
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
