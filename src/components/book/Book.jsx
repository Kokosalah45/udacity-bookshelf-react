import React from "react";

import SelectField from "../select-field/SelectField";
import { update } from "../../BooksAPI";
import { useState } from "react";
import { getAllBooks } from "../../features/slices/shelfSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const [shelfStatus, setShelfStatus] = useState(bookDetails.shelf || "none");
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleShelfStatusChange = async (e) => {
    try {
      const target = e.target;

      const value = target.value;
      await update(bookDetails, value);

      setShelfStatus(value);
      if (pathname === "/") {
        dispatch(getAllBooks());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: bookDetails.imageLinks
              ? `url(${bookDetails.imageLinks.thumbnail}`
              : "",
          }}
        ></div>
        <div className="book-shelf-changer">
          <SelectField
            fields={[
              "Move to...",
              "read",
              "currentlyReading",
              "wantToRead",
              "none",
            ]}
            shelfStatus={shelfStatus}
            handleShelfStatusChange={handleShelfStatusChange}
          />
        </div>
      </div>
      <div className="book-title">
        {bookDetails.title ? bookDetails.title : "no title"}
      </div>
      <div className="book-authors">
        {bookDetails.authors ? bookDetails.authors.join(" - ") : "no author"}
      </div>
    </div>
  );
};

export default Book;
