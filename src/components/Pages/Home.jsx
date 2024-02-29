import React, { useState } from "react";
import * as XLSX from "xlsx";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Home = () => {
  const [rowData, setRowData] = useState([]);
  // const [columnDefs, setColumnDefs] = useState([
  //   // 이미지를 포함할 컬럼 정의, cellRendererFramework 사용
  //   {
  //     headerName: "프린트상태",
  //     field: "printStatus",
  //     cellRendererFramework: (params) => {

  //     return <div>{params.vale}</div>
  //   },
  //     autoHeight: true,
  //     width: 100
  //   },
  //   {
  //     headerName: "Image",
  //     field: "image",
  //     cellRendererFramework: (params) => {
  //       console.log("params", params.value)
  //       return <img src={`${params.data[3]}`} style={{height: "50px", width:"auto"}} alt="im"/>;
  //   }},
  // ])
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      // generateGrid(data);
      setRowData(data);
    };
    reader.readAsBinaryString(file);
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "폴라상품",
      field: "itemName",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      cellRenderer: (params) => {
        console.log("param", params.data[0]);
        return <div>{params.data[0]}</div>;
      },
    },
    {
      headerName: "폴라코드",
      field: "polarCode",
      cellRenderer: (params) => {
        console.log("param", params.data[1]);
        return <div>{params.data[1]}</div>;
      },
    },
    {
      headerName: "프린트상태",
      field: "printStatus",
      cellRenderer: (params) => {
        console.log("param", params.data[2]);
        return <div>{params.data[2]}</div>;
      },
    },
    {
      headerName: "이미지",
      field: "image",
      cellRenderer: (params) => {
        // console.log("param", params.data[3])
        return (
          <img
            src={`${params.data[3]}`}
            style={{ height: "50px", width: "auto" }}
            alt="im"
          />
        );
      },
    },
  ]);

  const generateGrid = (data) => {
    const columns = data[0].map((column) => ({
      headerName: column,
      field: column,
    }));
    const rows = data.slice(1).map((row, index) => {
      return row.reduce((accumulator, currentValue, currentIndex) => {
        accumulator[data[0][currentIndex]] = currentValue;
        return accumulator;
      }, {});
    });

    setColumnDefs(columns);
    setRowData(rows);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          domLayout="autoHeight"
          suppressContextMenu
          suppressDragLeaveHidesColumns
          colResizeDefault="shift"
          suppressScrollOnNewData

        />
      </div>
    </div>
  );
};

export default Home;
