import React from "react";

const FilterDropdown = ({ options, selectedOption, handleChange }) => {
  return (
    <div className="filter">
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
