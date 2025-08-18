import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mock";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { Box, Typography, useTheme } from "@mui/material";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography color={colors.Third[500]}>${params.row.cost}</Typography>
        );
      },
    },
  ];

  return (
    <Box m={"10px 20px"}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="10px 0 0 0"
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.Secondary[500],
          },
          "& .MuiDataGrid-columnHeader": {
            borderBottom: "none",
            backgroundColor: colors.Secondary[600],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.Secondary[900],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.Secondary[600],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.Secondary[500]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Invoices;
