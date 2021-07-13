import React from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";
import Skeleton from "@material-ui/lab/Skeleton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CoinTable({}) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, 5 - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Rank</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left"> Symbol</StyledTableCell>
            <StyledTableCell align="left">Current Price</StyledTableCell>
            <StyledTableCell align="left">
              Price Change % (24 hrs)
            </StyledTableCell>
            <StyledTableCell align="left">Market cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row">
                <Skeleton animation="wave" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton animation="wave" />
              </StyledTableCell>
              <StyledTableCell
                style={{
                  textTransform: "capitalize",
                }}
                align="left"
              >
                <Skeleton animation="wave" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton animation="wave" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton animation="wave" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Skeleton animation="wave" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
//import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
