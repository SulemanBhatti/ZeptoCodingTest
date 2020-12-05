import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../styles";

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerWrapper}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
