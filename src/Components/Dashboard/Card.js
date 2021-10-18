import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Create, MenuBook } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 10px 20px -10px rgba(0,0,0,0.5)",
    color: "#28282B",
    paddingTop: "3px",
    paddingBottom: "30px",
    position: "relative",
    width: "450px",
    maxWidth: "100%",
    minHeight: "250px",
    textAlign: "center",
    alignItems: "center",
    "&:hover": {
      background: "#9BB558",
      transform: "scale(1.02)",
      "& $h2": {
        color: "#FFFFFF",
        borderBottomColor: "#52B69A",
      },
      "& $h5": {
        color: "#FFFFFF",
      },
      "& $p": {
        opacity: 1,
        transform: "none",
      },
    },
  },
  fab1: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fab2: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(9),
  },
  h2: {
    lineHeight: "1",
    paddingBottom: ".5em",
    margin: "1em 0 0.15em",
    transition: "color .2s ease, border .2s ease",
  },
  hr: {
    border: "none",
    width: "80%",
    height: "2px",
    backgroundColor: "#28282b",
  },
  h5: {
    color: "#627084",
    fontSize: "1.125em",
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "0.1em",
    margin: "0 0 1.8em",
    transition: "color .45s ease",
  },
  p: {
    opacity: "0",
    color: "#FFFFFF",
    fontWeight: "600",
    lineHeight: "1.8",
    margin: "0 0 1.25em",
    transform: "translateY(-0.5em)",
    transition: "opacity .45s ease, transform .5s ease",
  },
}));

export default function Card(props) {
  const classes = useStyles();
  return (
    <div class={classes.cardContainer}>
      <h2 className={classes.h2}>Journal Name</h2>
      <hr className={classes.hr} />
      <br />
      <h5 className={classes.h5}>Created at: 24/10/2021</h5>
      <p className={classes.p}>15 Entries</p>
      <Fab className={classes.fab2} size="small" color="secondary">
        <MenuBook />
      </Fab>
      <Fab className={classes.fab1} size="small" color="secondary">
        <Create />
      </Fab>
    </div>
  );
}