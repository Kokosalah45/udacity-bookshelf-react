import React from "react";

import SelectField from "../select-field/SelectField";
import { update } from "../../BooksAPI";
import { useState } from "react";
import { getAllBooks } from "../../features/slices/shelfSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
const Book = ({ bookDetails }) => {
  const [shelfStatus, setShelfStatus] = useState(bookDetails?.shelf);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log({ bookDetails });

  const handleShelfStatusChange = (e) => {
    try {
      const target = e.target;

      const value = target.value;
      console.log(value);
      update(bookDetails, value);
      setShelfStatus(value);
      if (pathname === "/") {
        console.log("dispatched !");
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
            backgroundImage: `url(${bookDetails.imageLinks.smallThumbnail})`,
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
      <div className="book-title">{bookDetails.title}</div>
      <div className="book-authors">
        {bookDetails.authors ? bookDetails.authors.join(" - ") : "no author"}
      </div>
    </div>
  );
};

export default Book;
