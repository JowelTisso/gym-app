import "./Search.css";
import React from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search-container flex-center br-2x">
      <IoSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search gym name here..."
      />
      <button className="search-btn pointer flex-center br-2x">
        <IoLocationSharp className="search-icon" />
      </button>
      <button className="search-btn pointer btn-clear br-2x">Clear</button>
    </div>
  );
};

export default Search;
