import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Menu(props) {
  const { classes } = props;

  return (
      <div className={classes.root}>
          <Paper className={classes.paper}><Header/></Paper>
      </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);