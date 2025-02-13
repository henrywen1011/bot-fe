import React from "react";
import DataTable, { TableProps, createTheme } from "react-data-table-component";
// import { TStakedTableData } from "shared/utilities/table-data-map.ts";

const Table: React.FC<TableProps<any>> = ({
  columns,
  data,
  keyField,
  className,
  selectableRows,
}) => {
  createTheme(
    "solarized",
    {
      text: {
        primary: "##fff9",
        secondary: "#2aa198",
      },
      background: {
        default: "transparent",
      },
      context: {
        background: "#cb4b16",
        text: "#ff0000",
      },
      divider: {
        default: "#fff0",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
  return (
    <DataTable
      columns={columns}
      data={data}
      keyField={keyField}
      className={className}
      selectableRows={selectableRows}
      theme="solarized"
    />
  );
};

export default Table;
