import {
  Button,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3%",
    marginLeft: "5%",
    width: "90%",
  },
  button: {
    marginTop: "5%",
    display: "flex",
  },
}));

export default function CreateCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Create Journal</h1>
      <FormGroup>
        <FormControl variant="outlined">
          <TextField
            id="outlined-basic"
            label="Journal Name"
            variant="outlined"
          />
        </FormControl>
      </FormGroup>
      <Button className={classes.button} variant="contained" color="primary">
        Create
      </Button>
    </div>
  );
}
