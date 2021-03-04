import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="input-group mb-3">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-outline-secondary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
