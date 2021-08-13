//IMPORTING MATERIAL-UI COMPONENTS
import { Typography, Container, Divider } from "@material-ui/core";
//MATERIAL-UI STYLESHEET
import useStyles from "../Styles";

const IPDetails = ({ IPData }) => {
  const classes = useStyles();
  return (
    <Container className={classes.detailsContainer}>
      <div className={classes.statsContainer}>
        <Typography paragraph className={classes.divHeaders}>
          IP ADDRESS
        </Typography>
        <Typography variant="h5" className={classes.divData}>
          {IPData.ip}
        </Typography>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={classes.statsContainer}>
        <Typography paragraph className={classes.divHeaders}>
          LOCATION
        </Typography>
        <Typography variant="h5" className={classes.divData}>
          {IPData.location.city},{IPData.location.region}{" "}
          {IPData.location.postalCode}
        </Typography>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={classes.statsContainer}>
        <Typography paragraph className={classes.divHeaders}>
          TIMEZONE
        </Typography>
        <Typography variant="h5" className={classes.divData}>
          {IPData.location.timezone}
        </Typography>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={classes.statsContainer}>
        <Typography paragraph className={classes.divHeaders}>
          ISP
        </Typography>
        <Typography variant="h5" className={classes.divData}>
          {IPData.isp}
        </Typography>
      </div>
    </Container>
  );
};

export default IPDetails;
