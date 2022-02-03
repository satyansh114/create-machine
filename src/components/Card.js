import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dateCreated: {
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: "5px",
  },
  createButton: {
    position: "absolute",
    bottom: 20,
    left: 0,
    width: "100%",
  },
});

const CustomCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Card
      sx={{
        minWidth: 310,
        minHeight: 370,
        padding: "13px",
        position: "relative",
        borderRadius: "22px",
        backgroundColor: "#171727",
        color: "#ffff",
      }}
    >
      <CardContent>
        <Typography variant="h5">{data.machineName}</Typography>
        <Typography variant="body2" className={classes.dateCreated}>
          {data.createdAt}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          {data.description}
        </Typography>
        <Box
          display="flex"
          className={classes.createButton}
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <a href={data.url} target="blank">
            <Button variant="outlined">Start</Button>
          </a>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
