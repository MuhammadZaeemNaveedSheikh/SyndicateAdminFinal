import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "./Pagination";

const columns: GridColDef[] = [
  //   { field: "id", type: "number", headerName: "ID", width: 90 },
  {
    field: "number",
    headerName: "Number",
    width: 150,
    editable: false,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: false,
  },
  {
    field: "user",
    headerName: "User",
    width: 150,
    editable: false,
  },
  {
    field: "growth",
    headerName: "Growth",
    width: 150,
    editable: false,
  },
  {
    field: "positions",
    headerName: "Positions",
    width: 150,
    editable: false,
  },
  {
    field: "balance",
    headerName: "Balance",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "equity",
    headerName: "Equity",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "profit",
    headerName: "Profit",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "product",
    headerName: "Product",
    width: 150,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    number: "Number",
    title: "title",
    user: "Snow",
    growth: "Jon",
    positions: 35,
    balance: 1000,
    equity: 500,
    profit: 200,
    product: "Product A",
  },
  {
    id: 2,
    number: "Number",
    title: "title",
    user: "Lannister",
    growth: "Cersei",
    positions: 42,
    balance: 1500,
    equity: 700,
    profit: 300,
    product: "Product B",
  },
  // Add more rows as needed
];

const Accounts = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          sx={{
            border: "none",
            ".MuiDataGrid-cell": {
              border: "none",
            },
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#0F0B19",
              color: "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              borderRadius: "8px",
            },
            ".MuiDataGrid-row": {
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
              border: "none",
              mt: "3px",
            },
          }}
          rows={rows}
          getRowId={(row: any) => {
            return row?.id;
          }}
          columns={columns}
          hideFooter
          // checkboxSelection
          // disableRowSelectionOnClick
        />
      </Box>
      <Pagination />
    </>
  );
};

export default Accounts;
