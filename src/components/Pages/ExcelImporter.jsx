import React from 'react';
import * as XLSX from 'xlsx';

 const ExcelImporter=({ onGridDataReady })=> {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    onGridDataReady(jsonData);
  };

  return (
    <input type="file" onChange={handleFile} accept=".xlsx, .xls" />
  );
}

export default ExcelImporter