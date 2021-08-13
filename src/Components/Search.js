import {
  Typography,
  Paper,
  InputBase,
  Divider,
  IconButton,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import useStyles from "../Styles";

const Search = ({ ipByClient, handleSubmit }) => {
  const classes = useStyles();
  return (
    <section className={classes.containerOfInput} sm={12}>
      <Typography variant="h5" className={classes.header}>
        IP Address Tracker
      </Typography>
      <Paper component="form" className={classes.form} onSubmit={handleSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Search for any IP address or domain"
          inputRef={ipByClient}
        />
        <Divider orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <ChevronRightIcon color="primary" />
        </IconButton>
      </Paper>
    </section>
  );
};

export default Search;
