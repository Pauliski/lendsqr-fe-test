import SearchIcon from "components/images/SearchIcon";
import { SearchProps } from "Interface";
import React from "react";
import "./search.scss";

const Search = ({
  hasButton,
  placeholder,
  hasDatalist,
  listId,
  listArray,
  filterBy,
  type,
  nested,
  style,
  handleChange,
}: SearchProps) => {
  return (
    <div className="search-wrapper" style={{ ...style }}>
      <input
        type={type}
        placeholder={placeholder}
        name={`${listId && listId}`}
        list={listId !== undefined && hasDatalist ? listId  : ""}
        onChange={handleChange}
      />
      {hasDatalist && (
        <datalist id={listId}>
          {listArray &&
            listArray.map((item, index) => (
              <option
                key={index}
                value={
                  filterBy && nested
                    ? `${item[filterBy][nested]}`
                    : filterBy
                    ? `${item[filterBy]}`
                    : ""
                }
              />
            ))}
        </datalist>
      )}

      <button style={{ display: `${hasButton ? "inline" : "none"}` }}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
