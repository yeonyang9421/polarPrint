import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ExcelImporter from "./ExcelImporter";
import { MyGridComponent } from "./MyGridComponent";

const Home = () => {
  const [gridData, setGridData] = useState([]);

  const handleFileLoaded = (data) => {
    setGridData(data);
  };

  return (
    <div style={{margin:"20px"}}>
      <ExcelImporter onGridDataReady={handleFileLoaded} />
      <div style={{marginBottom:"20px"}}/>
      <MyGridComponent rowData={gridData} />
    </div>
  );
};

export default Home;
