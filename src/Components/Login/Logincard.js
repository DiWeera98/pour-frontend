import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "20px",
    border: "none",
  },
  box: {
    width: "500px",
    padding: "30px",
    position: "absolute",
    top: "15%",
    left: "33%",
    background: "rgba(243,234,218,0.8)",
    textAlign: "center",
    transition: "0.25s",
    marginTop: "100px",
  },
  input: {
    border: "0",
    background: "none",
    display: "block",
    margin: "20px auto",
    textAlign: "center",
    border: "2px solid #3498db",
    padding: "10px 10px",
    width: "250px",
    outline: "none",
    color: "white",
    borderRadius: "24px",
    transition: "0.25s",
    "&:focus": {
      width: "280px",
      borderColor: "#2ecc71",
    },
  },
  h3: {
    color: "#28282B",
    fontWeight: "600",
  },
  submit: {
    border: "0",
    background: "#52B69A",
    display: "block",
    margin: "20px auto",
    textAlign: "center",
    padding: "14px 40px",
    outline: "none",
    color: "white",
    borderRadius: "24px",
    transition: "0.25s",
    cursor: "pointer",
  },
}));

export default function LoginCard() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.box}>
        <h1 className={classes.h3}>Sign In</h1>
        <p className="text-muted"> Please enter your login and password!</p>
        <input
          className={classes.input}
          type="text"
          name=""
          placeholder="Username"
        />
        <input
          className={classes.input}
          type="password"
          name=""
          placeholder="Password"
        />
        <input
          className={classes.submit}
          type="submit"
          name=""
          value="Sign In"
          href="#"
        ></input>
      </div>
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   glassDiv: {
//     position: "absolute",
//     zIndex: "100",
//     top: "25%",
//     width: "500px",
//     height: "300px",
//     padding: "20px",
//     borderRadius: "5px",
//     background: "rgba(255,255,255,0.5)",
//   },
// }));

// export default function LoginCard() {
//   const classes = useStyles();
//   return <div className={classes.glassDiv}></div>;
// }
