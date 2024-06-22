import React, { useState } from "react";
import Header from "./components/Header";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import DataSelector from "./components/DataSelector";
import { salesData, revenueData } from "./data";

const App = () => {
  const [selectedData, setSelectedData] = useState(salesData);

  const handleDataSelect = (value) => {
    if (value === "sales") {
      setSelectedData(salesData);
    } else if (value === "revenue") {
      setSelectedData(revenueData);
    }
  };

  return (
    <div className="App">
      <Header />
      <DataSelector onSelect={handleDataSelect} />
      <div className="charts">
        <BarChart data={selectedData} />
        <LineChart data={selectedData} />
      </div>
    </div>
  );
};

export default App;
