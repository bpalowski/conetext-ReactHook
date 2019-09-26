import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of ', id: 1 },
    { title: 'name the ', id: 2 },
    { title: 'name tree ', id: 3 },
    { title: 'name yes ', id: 4 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
