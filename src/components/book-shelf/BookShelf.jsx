import React from "react";
import shortid from "shortid";
import Book from "../book/Book";
const BookShelf = ({ title, books }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {books.map((bookDetails) => (
          <li key={shortid.generate()}>
            <Book bookDetails={bookDetails} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookShelf;
