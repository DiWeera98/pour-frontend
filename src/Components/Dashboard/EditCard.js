import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "2%",
  },
  text: {
    width: "80%",
  },
  button: {
    marginTop: "5%",
    marginBottom: "3%",
    marginLeft: "0%",
  },
}));

export default function EditCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Edit Journal</h1>
      <TextField
        className={classes.text}
        id="outlined-basic"
        label="Journal Name"
        variant="outlined"
      />
      <br />
      <Button className={classes.button} variant="contained" color="secondary">
        Save
      </Button>
      <Button className={classes.button} variant="contained" color="primary">
        Cancel
      </Button>
    </div>
  );
}
