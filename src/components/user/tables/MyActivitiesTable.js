import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const MyActivitiesTable = ({ columns, rows }) => {
  //Setting state for page
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  //Handlig changing of page
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <div>
      <TableContainer sx={{ Height: 750 }}>
        <Table aria-label="table" hover="true">
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
              const convertDay = (date) => {
                const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };
                let newDate = new Date(date);
                return newDate.toLocaleDateString("en-US", options);
              };
              const convertTime = (date) => {
                const day = new Date(date);
                const time = String(day);
                const hours = time.slice(16, 18);
                const minutes = time.slice(19, 21);
                const ampm = hours >= 12 ? "PM" : "AM";

                return `${
                  hours % 12 === 0 ? 12 : hours % 12
                }:${minutes} ${ampm}`;
              };

              return (
                <TableRow hover key={key}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    {convertDay(row.created_at)}
                  </TableCell>
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
    </div>
  );
};

export default MyActivitiesTable;
