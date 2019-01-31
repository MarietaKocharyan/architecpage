import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    <div>
      <Button className={classes.button}>Goal</Button>
      <Button color="#9e9e9e" className={classes.button}>
        About
      </Button>
      <Button  className={classes.button}>
        Secondary
      </Button>
      <Button color="#9e9e9e" className={classes.button}>
        Disabled
      </Button>
      <Button  color="#9e9e9e" href="#text-buttons" className={classes.button}>
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
        <Button  className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

MenuButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButtons);