import React from "react";

function Search() {
  return (
    <div className="search-container">
      <div className="search-content">
        <ion-icon id="search" name="search"></ion-icon>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="item..."
        id="search-item"
      />
    </div>
  );
}

export default Search;
