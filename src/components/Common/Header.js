import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = theme => ({
  Link: {
    margin: theme.spacing.unit,
    color: theme.palette.text.secondary,
  },
});

class  Header extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Grid>
        <div>
          <Link to='/' className={classes.Link}>
            Home
          </Link> 
          <Link  to='/about' className={classes.Link}>
            About
          </Link>
          <Link  to ='/goal' className={classes.Link}>
            Goal
          </Link>
          <Link to='/arts' className={classes.Link}>
            Arts
          </Link> 

        </div>
      </Grid>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);