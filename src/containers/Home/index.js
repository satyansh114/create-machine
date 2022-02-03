import { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomCard from "../../components/Card";
import CustomDialog from "../../components/Dialog";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./index.css";
import ApiConfig from "../../config/ApiConfig";
import CircularProgress from "@mui/material/CircularProgress";
import Axios from "axios";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#0D0D20",
    minHeight: "100vh",
  },
});

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [machines, setMachines] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getAllMachines = async () => {
    try {
      const response = await Axios.get(ApiConfig.machines.getAllMachines);
      console.log("Machines fetched new", response.data);
      setMachines(response.data.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllMachines();
  }, [open]);

  return (
    <Box p={3} className={classes.container}>
      <Box textAlign="center" mb={4}>
        {" "}
        <Typography variant="h3" sx={{ color: "#ffff" }}>
          Cyber Storm
        </Typography>
        <Typography variant="h5" sx={{ color: "#f3f3f3", marginTop: "10px" }}>
          Link and visit the virtual machines on a click of a button!
        </Typography>
      </Box>

      <Button
        variant="contained"
        style={{ marginBottom: "20px" }}
        onClick={handleClickOpen}
      >
        Add
      </Button>
    {/* <iframe src="http://10.1.76.26:8080/guacamole/#/client/V2luZG93TmV3AGMAZGVmYXVsdA==" width="100%" height="300" style="border:1px solid black;"/> */}
    {/* <iframe src="http://10.1.76.26:8080/guacamole/#/client/V2luZG93TmV3AGMAZGVmYXVsdA==" title="YT" /> */}

      <Grid container spacing={4}>
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : machines.length < 1 ? (
          <Grid item sm={12} md={4} lg={3}>
            {" "}
            <Typography variant="h4" sx={{ color: "#ffff" }}>
              No Data found!
            </Typography>
          </Grid>
        ) : (
          machines.map((machine) => (
            <Grid
              item
              sm={12}
              md={4}
              lg={3}
              key={machine.id}
              sx={{
                position: "relative",
              }}
            >
              <FlashOnIcon
                sx={{
                  position: "absolute",
                  top: "6px",
                  left: "47%",
                  zIndex: 1,
                  color: "#ff9317",
                  fontSize: 44,
                }}
              />
              <CustomCard data={machine} />
            </Grid>
          ))
        )}
      </Grid>
      <CustomDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Homepage;
