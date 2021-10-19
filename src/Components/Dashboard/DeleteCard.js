import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import image from "../../Assets/Question.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    width: "10%",
  },
  button: {
    margin: "1%",
  },
}));

export default function DeleteCard() {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.img} src={image} />
      <h1>Are you sure?</h1>
      <Button className={classes.button} variant="contained" color="secondary">
        Delete
      </Button>
      <Button className={classes.button} variant="contained" color="primary">
        Cancel
      </Button>
    </div>
  );
}
