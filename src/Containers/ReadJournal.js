import { Fab, makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import Read from "../Components/Read/Read";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    top: theme.spacing(10),
    left: theme.spacing(5),
  },
}));

export default function ReadJournal() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Fab
        className={classes.fab}
        size="small"
        color="secondary"
        onClick={() => history.push("/dashboard")}
      >
        <Home />
      </Fab>
      <Read />
    </div>
  );
}
