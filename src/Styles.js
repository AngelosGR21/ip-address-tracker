import { makeStyles } from "@material-ui/core/styles";

//BACKGROUND IMAGE FOR INPUT SECTION
import bgImage from "./Images/bgImage.png";

const useStyles = makeStyles((theme) => ({
  //INPUT SECTION STYLING
  containerOfInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "cover",
    backgroundSize: "cover",
    height: "40%",
    [theme.breakpoints.up("sm")]: {
      height: "30%",
    },
  },
  header: {
    color: "white",
    marginTop: "10px",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.7rem",
      marginTop: "15px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
      marginTop: "60px",
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    borderRadius: "10px",
    fontSize: "0.7rem",
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
    [theme.breakpoints.up("xl")]: {
      form: "800px",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "0.6rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.2rem",
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },

  //DETAILS ABOUT THE IP STYLING
  detailsContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
    zIndex: "1",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    top: "22%",
    borderRadius: "10px",
    backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      padding: "20px",
      textAlign: "start",
    },
    [theme.breakpoints.up("xl")]: {
      top: "27%",
    },
  },
  statsContainer: {
    marginBottom: "8px",
    marginTop: "8px",
    [theme.breakpoints.up("sm")]: {
      padding: "0 10px",
    },
  },
  divHeaders: {
    color: "hsl(0, 0%, 59%)",
    fontSize: "0.5rem",
    fontWeight: "bolder",
    marginBottom: "5px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.4rem",
    },
  },
  divData: {
    color: "hsl(0, 0%, 17%)",
    fontSize: "1.1rem",
    fontWeight: "bolder",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  //MAP STYLING
  map: {
    height: "60%",
    zIndex: "0",
    [theme.breakpoints.up("sm")]: {
      height: "70%",
    },
  },
}));

export default useStyles;
