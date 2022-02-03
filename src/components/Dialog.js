import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ApiConfig from "../config/ApiConfig";
//import CircularProgress from "@mui/material/CircularProgress";
import Axios from "axios";

const useStyles = makeStyles({
  dialog: {
    width: "20vw",
    backgroundColor: "#171727",
    color: "#ffff !important",
  },
  actions: {
    backgroundColor: "#171727",
  },
  input: {
    marginTop: "5px",
    marginBottom: "15px",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "rgba(25, 118, 210, 0.5) !important",
    color: "#ffff",
  },
  root: {
    "MuiOutlinedInput-input": {
      color: "#ffff",
    },
  },
  formMargin: {
    marginTop: "11px !important",
    marginBottom: "5px !important",
  },
});

const CustomDailog = ({ open, handleClose }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const temp = { ...formData, [name]: value };
    setFormData(temp);
  };

  const createMachine = async () => {
    try {
      const response = await Axios.post(ApiConfig.machines.createMachine, {
        machineName: formData.name,
        description: formData.description,
        url: formData.url,
      });
      console.log("Courses fetched new", response.data.data);
      handleClose();
      // setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      // sx={{ backgroundColor: "#171727", color: "#ffff" }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={classes.dialog}>
        <Typography variant="h4"> Add a new machine</Typography>
        <Typography variant="h5" className={classes.formMargin}>
          {" "}
          Name
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          name="name"
          onChange={handleChange}
          className={classes.input}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              root: classes.root,
            },
          }}
        />
        <Typography variant="h5" className={classes.formMargin}>
          {" "}
          URL
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleChange}
          name="url"
          className={classes.input}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <Typography variant="h5" className={classes.formMargin}>
          {" "}
          Description
        </Typography>
        <TextField
          variant="outlined"
          multiline
          name="description"
          minRows="4"
          fullWidth
          onChange={handleChange}
          className={classes.input}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="contained" onClick={createMachine}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDailog;
