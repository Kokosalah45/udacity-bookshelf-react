import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../features/slices/shelfSlice";
import { categorize } from "../../utils";
import NavigateTo from "../../components/navigateTo/NavigateTo";
import BookShelf from "../../components/book-shelf/BookShelf";
import shortid from "shortid";
const Shelves = () => {
  const dispatch = useDispatch();
  const { shelfResults, loading } = useSelector((state) => state.shelfSlice);

  const categories = categorize(
    ["currentlyReading", "read", "wantToRead"],
    shelfResults,
    "shelf"
  );

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  return (
    <div>
      {Object.entries(categories).map(([key, value]) => (
        <BookShelf title={key} books={value} key={shortid.generate()} />
      ))}
      {loading && (
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
          }}
        >
          loading...
        </div>
      )}
      <NavigateTo to={"/search"} />
    </div>
  );
};

export default Shelves;
