import React from "react";
import SearchField from "../../components/search-field/SearchField";
import NavigateTo from "../../components/navigateTo/NavigateTo";

const Search = () => {
  return (
    <div>
      <SearchField />
      <NavigateTo to={"/"} />
    </div>
  );
};

export default Search;
