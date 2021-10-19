import { Fab, Grid, makeStyles, Modal, Paper } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import Card from "../Components/Dashboard/Card";
import CreateCard from "../Components/Dashboard/CreateCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "5%",
    marginTop: "2%",
    marginRight: "5%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>title</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>title</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>title</Paper>
          </Grid>
        </Grid>
        <Fab
          className={classes.fab}
          size="small"
          color="secondary"
          onClick={() => setCreateOpen(true)}
        >
          <Add />
        </Fab>
      </div>
    </>
  );
}
