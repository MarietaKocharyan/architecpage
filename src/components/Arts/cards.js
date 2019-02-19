import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes, image } = props;
  return (
    <Card className={classes.card} id ='MediaCard-card-158'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent id ='MediaCard-card-158'>
          <Typography gutterBottom variant="h5" component="h2" >
          </Typography>
          <Typography component="p" id = "cards-of-arts" >
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);