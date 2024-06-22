import React, { useState } from "react";

const DataSelector = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("sales");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className="data-selector">
      <label htmlFor="data-select">Select Data:</label>
      <select id="data-select" value={selectedOption} onChange={handleChange}>
        <option value="sales">Sales Data</option>
        <option value="revenue">Revenue Data</option>
      </select>
    </div>
  );
};

export default DataSelector;
