import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import EntryForm from "../Components/Entry/EntryForm";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2%",
    marginLeft: "0%",
  },
}));

export default function Entry() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <EntryForm />
        </Grid>
      </Grid>
    </div>
  );
}
