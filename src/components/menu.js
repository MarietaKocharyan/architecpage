import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Artsof from './Arts/index'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class MenuButtons extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }
  handleClick = () => <Artsof />

  render(){
    const { classes, images } = this.props;
    return (
      <Grid
          container
          item
          xs={12}
          justify="space-between"
      >
        <Button className={classes.button}>Goal</Button>
        <Button  className={classes.button}> 
            About
        </Button>
        <Button  className={classes.button}>
          Contect
        </Button>
        <Button  className={classes.button} onClick={this.handleClick}>
          Arts
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="text-button-file"
          multiple
          type="file"
        />
        <label htmlFor="text-button-file">
          <Button component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </Grid>
      );
  }
}

MenuButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButtons);