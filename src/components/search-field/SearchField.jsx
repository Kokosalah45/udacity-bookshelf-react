import React from "react";
import { getSearchResults } from "../../features/slices/searchSlice";
import Book from "../book/Book";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerms } from "../../utils";
import { capitalize } from "../../utils";
const SearchField = () => {
  const [inputData, setInputData] = useState({
    search: "",
  });
  const { searchResults } = useSelector((state) => state.searchSlice);
  const { shelfResults } = useSelector((state) => state.shelfSlice);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    const capitalizedSearchTerm = capitalize(inputData.search);
    if (setSearchTerms.includes(capitalizedSearchTerm)) {
      dispatch(getSearchResults(inputData.search));
    }
  }, [inputData.search, dispatch]);

  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        value={inputData.search}
        onChange={handleChange}
      />

      {searchResults.map((searchBook) => {
        const searchBookOnShelfFound = shelfResults.find(
          (shelfBook) => shelfBook.id === searchBook.id
        );

        const book = searchBookOnShelfFound || searchBook;

        return <Book bookDetails={book} />;
      })}
    </div>
  );
};

export default SearchField;
