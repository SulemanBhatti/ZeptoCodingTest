import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TabButton from "./components/TabButton";
import useStyles from "./styles";
import Loader from "./components/Loader";
export default function App() {
  const [rows, setRows] = useState([]);
  const [period, setPeriod] = useState("day");
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    // Update the table using the API
    setIsLoading(true);
    const url = `https://7cg8uz8p69.execute-api.us-east-1.amazonaws.com/test/people`;
    axios
      .get(url, { params: { period: period } })
      .then((res) => {
        const data = res.data;
        setRows(data.people);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [period]);

  return (
    <div className={classes.root}>
      <h1 className={classes.headerText}>Activity</h1>
      <div aria-label="button-div" className={classes.parentButton}>
        <TabButton
          buttonTitle="Today"
          activeButtonFlag={period === "day" ? true : false}
          buttonAction={() => setPeriod("day")}
        />
        <TabButton
          buttonTitle="This Week"
          activeButtonFlag={period === "week" ? true : false}
          buttonAction={() => setPeriod("week")}
        />
        <TabButton
          buttonTitle="This Month"
          activeButtonFlag={period === "month" ? true : false}
          buttonAction={() => setPeriod("month")}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer className={classes.table}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><b>Client</b></TableCell>
                <TableCell align="center"><b>Matter</b></TableCell>
                <TableCell align="left"><b>Description</b></TableCell>
                <TableCell align="left"><b>Type</b></TableCell>
                <TableCell align="left"><b>Time</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                      {row.client}
                    </TableCell>
                    <TableCell align="center">{row.matter}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.time}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
