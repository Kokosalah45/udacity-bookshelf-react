import React from "react";
import { getSearchResults } from "../../features/slices/searchSlice";
import Book from "../book/Book";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { capitalize } from "../../utils";
import shortid from "shortid";
import { useDebouncedCallback } from "use-debounce";

const SearchField = () => {
  const [inputData, setInputData] = useState({
    search: "",
  });
  const { searchResults } = useSelector((state) => state.searchSlice);
  const { shelfResults } = useSelector((state) => state.shelfSlice);
  const dispatch = useDispatch();
  const debouncedGetSearchResults = useDebouncedCallback(
    (capitalizedSearchTerm) =>
      dispatch(getSearchResults(capitalizedSearchTerm)),
    250
  );

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    const capitalizedSearchTerm = capitalize(inputData.search);

    debouncedGetSearchResults(capitalizedSearchTerm);
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

      {searchResults?.map((searchBook) => {
        const searchBookOnShelfFound = shelfResults.find(
          (shelfBook) => shelfBook.id === searchBook.id
        );

        const book = searchBookOnShelfFound || searchBook;

        return <Book bookDetails={book} key={shortid.generate()} />;
      })}
    </div>
  );
};

export default SearchField;
