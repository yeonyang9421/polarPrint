import React, { useState, useEffect, memo, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import "ag-grid-community/styles/ag-grid.css"; // 기본 스타일
import "ag-grid-community/styles/ag-theme-alpine.css"; // 테마

export function MyGridComponent({ rowData }) {
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      menuTabs: ["filterMenuTab"],
      filter: true,
      filterParams: {
        showTooltips: true,
      },
      sortable: true,
    }),
    []
  );


  const [gridApi, setGridApi] = useState(null);

  const onGridReady = params => {
    setGridApi(params.api);
  };

  const printImage = imageUrl => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<img src="${imageUrl}" style="width: 500px; border:1px solid black"; onload="window.print();window.close()" />`);
    printWindow.document.close();
  };

  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridApi.getSelectedNodes();


    console.log("selectedNodes", selectedNodes)
    selectedNodes.forEach(async node => {
      const response = await axios.get(
        `https://polapolarplanet.azurewebsites.net/api/v1/printingTicket/${node.data.polarCode}/image`
      );

      printImage(response.data.originImageUrl);
    });
  }, [gridApi]);


  const ImageCellRenderer = (params) => {
    const [imageUrl, setImageUrl] = useState("");
    console.log("ImageCellRenderer- params", params);
    useEffect(() => {
      const fetchImageUrl = async () => {
        try {
          const response = await axios.get(
            `https://polapolarplanet.azurewebsites.net/api/v1/printingTicket/${params.data.polarCode}/image`
          );
          setImageUrl(response.data.originImageUrl);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };
      fetchImageUrl();
    }, [params]);
    return (
      <img src={imageUrl} alt="" style={{ width: "100px", height: "auto" }} />
    );
  };

  console.log("rowData", rowData);
  const [columnDefs] = useState([
    {
      headerName: "폴라상품",
      field: "itemName",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      cellRenderer: (params) => {
        return <div>{params.data.itemName}</div>;
      },
    },
    {
      headerName: "폴라코드",
      field: "polarCode",
      cellRenderer: (params) => {
        console.log("param", params);
        return <div>{params.data.polarCode}</div>;
      },
    },
    {
      headerName: "프린트상태",
      field: "printStatus",
      cellRenderer: (params) => {
        console.log("param", params.data[2]);
        return <div>{params.data.printStatus}</div>;
      },
    },
    { headerName: "이미지", cellRenderer: memo(ImageCellRenderer) },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 1000, width: 900 }}>
      <AgGridReact
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        suppressContextMenu
        suppressDragLeaveHidesColumns
        rowHeight={60}
        colResizeDefault="shift"
        suppressScrollOnNewData
        rowSelection="multiple"
        onGridReady={onGridReady}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  );
}
