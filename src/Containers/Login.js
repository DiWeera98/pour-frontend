import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginBackground from "../Components/Login/LoginBg";
import LoginCard from "../Components/Login/Logincard";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapper}>
        <LoginCard />
      </div>
    </div>
  );
}
