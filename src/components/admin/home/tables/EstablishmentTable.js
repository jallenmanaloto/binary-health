import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const EstablishmentTable = ({ columns, rows }) => {
  //Setting state for page
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  //Handlig changing of page
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Paper sx={{ width: "100%", mt: 3 }}>
      <TableContainer sx={{ Height: 750 }}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ color: "#3376b5", fontWeight: 600 }}
                  key={column.id}
                  align="center"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, key) => {
              const convertTime = (date) => {
                const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };
                let newDate = new Date(date);
                return newDate.toLocaleDateString("en-US", options);
              };
              return (
                <TableRow hover key={key}>
                  <TableCell align="center">{row.first_name}</TableCell>
                  <TableCell align="center">{row.middle_name}</TableCell>
                  <TableCell align="center">{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.covid_status}</TableCell>
                  <TableCell align="center">
                    {convertTime(row.created_at)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        count={rows.length}
      />
    </Paper>
  );
};

export default EstablishmentTable;
