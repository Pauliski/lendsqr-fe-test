import SearchIcon from "components/images/SearchIcon";
import React from "react";
import "./search.scss";

const Search = () => {
  return (
    <div className="search-wrapper">
      <input type="text" placeholder="Search for anything" />
   
        <button>
          <SearchIcon />
        </button>
  
    </div>
  );
};

export default Search;
