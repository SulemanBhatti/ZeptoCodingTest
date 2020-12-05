import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    maxWidth: "1000px",
    paddingTop: "20px",
  },
  headerText: {
    color: "lightGrey",

    marginBottom: "5px",
  },
  table: {
    maxWidth: 1000,
    border: "1px solid lightGrey",
    marginTop: "20px",
  },
  button: {
    padding: "20px 15px",
    maxWidth: "200px",
    margin: "0px 5px 0px 5px",
    textAlign: "center",
    color: "grey",
    flex: "1",
    backgroundColor: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  buttonActive: {
    backgroundColor: "#dbd76a",
  },
  tableCellStyle: {
    textAlign: "center",

    textTransform: "capitalize",
  },
  parentButton: {
    display: "flex",
  },
  capitalText: {
    textTransform: "capitalize",
  },
  spinnerWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "250px",
    alignItems: "center",
  },
}));

export default useStyles;
