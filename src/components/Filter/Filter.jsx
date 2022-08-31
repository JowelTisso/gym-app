import "./Filter.css";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Select from "react-select";
import { customSelectStyles } from "../../utils/Constant";
import { selectOptions } from "../../utils/data";

const Filter = () => {
  return (
    <section className="filter">
      <h1>Filters</h1>
      <label>Location</label>
      <div className="filter-input-container br-2x">
        <IoSearch className="search-icon" />
        <input
          type="text"
          className="filter-input"
          placeholder="Enter location"
        />
      </div>
      <label>Price</label>
      <div className="filter-price-container">
        <div className="filter-input-container br-2x">
          <input type="number" className="filter-input" placeholder="Min" />
        </div>
        <div className="filter-input-container br-2x">
          <input type="number" className="filter-input" placeholder="Max" />
        </div>
      </div>
      <label>Cities</label>
      <div className="filter-input-container select br-2x">
        <Select styles={customSelectStyles} options={selectOptions} />
      </div>
    </section>
  );
};

export default Filter;
