import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function MenuButtons(props) {
  const { classes } = props;
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
        Secondary
      </Button>
      <Button  className={classes.button}>
        Disabled
      </Button>
      <Button   href="#text-buttons" className={classes.button}>
        Link
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

MenuButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButtons);