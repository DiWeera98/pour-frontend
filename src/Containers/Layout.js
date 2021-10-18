import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Components/Common/Navbar/Navbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage: "linear-gradient(#52B69A,#D9ED92)",
  },
}));

function Layout({ main }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      {main}
    </div>
  );
}

export default Layout;
