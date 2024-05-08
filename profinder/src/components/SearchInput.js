import React from 'react';

function SearchInput({ value, onChange, onClear }) {
  return (
    <div className="search-container">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder="Search users by ID, address, name..."
        value={value}
        onChange={onChange}
      />
      {value && <button onClick={onClear} className="clear-btn">✕</button>}
    </div>
  );
}

export default SearchInput;
