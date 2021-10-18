import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  makeStyles,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  h1: {
    textAlign: "left",
    marginLeft: "1%",
  },
  Select: {
    marginBottom: "1rem",
    width: "10%",
  },
  TextField: {
    marginBottom: "1rem",
  },
  button: {
    width: "100px",
    textAlign: "right",
  },
}));

export default function EntryForm() {
  const classes = useStyles();
  return (
    <div>
      <FormGroup>
        <h1 className={classes.h1}>Journal Entry</h1>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Rate</InputLabel>
          <Select
            native
            className={classes.Select}
            label="Rate"
            required
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Select>
          <TextField
            id="outlined-multiline-static"
            className={classes.TextField}
            label="Add thoughts here"
            multiline
            rows={18}
            defaultValue=""
            variant="outlined"
          />
        </FormControl>
        <Button
          className={classes.button}
          size="medium"
          variant="contained"
          color="secondary"
        >
          Enter
        </Button>
      </FormGroup>
    </div>
  );
}
