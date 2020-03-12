// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { withStyles } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// // import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// // import Typography from '@material-ui/core/Typography';
// //
// // const styles = {
// //   card: {
// //     maxWidth: 345,
// //   },
// //   media: {
// //     height: 140,
// //   },
// // };
// //
// // function Cards(props) {
// //   const { classes, image } = props;
// //   const images = [
// //     {
// //       id: 1,
// //      data: '',
// //     },
// //     {
// //       id: 2,
// //       data: '',
// //     },
// //     {
// //       id: 3,
// //       data:'',
// //     }
// //   ]
// //   return (
// //     <Card className={classes.card} id ='MediaCard-card-158'>
// //       <CardActionArea>
// //         <CardMedia
// //           className={classes.media}
// //           image={props.image}
// //           title={props.title}
// //         />
// //         <CardContent id ='MediaCard-card-158'>
// //           <Typography component="p" id = "cards-of-arts" >
// //             {props.text}
// //           </Typography>
// //         </CardContent>
// //       </CardActionArea>
// //       <CardActions>
// //         <Button size="small" color="primary">
// //           Share
// //         </Button>
// //         <Button size="small" color="primary">
// //           Learn More
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }
// // Cards.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };
// // export default withStyles(styles)(Cards);
//
// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { withStyles } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// // import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// // import Typography from '@material-ui/core/Typography';
// //
// // const styles = {
// //   card: {
// //     maxWidth: 345,
// //   },
// //   media: {
// //     height: 140,
// //   },
// // };
// //
// // function Cards(props) {
// //   const { classes, image } = props;
// //   const images = [
// //     {
// //       id: 1,
// //      data: '',
// //     },
// //     {
// //       id: 2,
// //       data: '',
// //     },
// //     {
// //       id: 3,
// //       data:'',
// //     }
// //   ]
// //   return (
// //     <Card className={classes.card} id ='MediaCard-card-158'>
// //       <CardActionArea>
// //         <CardMedia
// //           className={classes.media}
// //           image={props.image}
// //           title={props.title}
// //         />
// //         <CardContent id ='MediaCard-card-158'>
// //           <Typography component="p" id = "cards-of-arts" >
// //             {props.text}
// //           </Typography>
// //         </CardContent>
// //       </CardActionArea>
// //       <CardActions>
// //         <Button size="small" color="primary">
// //           Share
// //         </Button>
// //         <Button size="small" color="primary">
// //           Learn More
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }
// // Cards.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };
// // export default withStyles(styles)(Cards);
// import React, { Component } from 'react';
//
// // class ImageCard extends Component {
// //   render() {
// //     return (
// //         <div>
// //           <img src={this.props.image.urls.regular}
// //                alt={this.props.image.alt_description} />
// //         </div>
// //     )
// //   }
// // }
// //
// // export default ImageCard;
//
// class ImageCard extends Component {
//   constructor(props) {
//     super(props);
//     this.imageRef = React.createRef();
//   }
//
//   componentDidMount() {
//     this.imageRef.current.addEventListener('load', this.setSpans);
//   }
//
//   setSpans = () => {
//     console.log(this.imageRef.current.clientHeight);
//   }
//
//   render() {
//     return (
//         <div>
//           <img ref={this.imageRef}
//                src={this.props.image.urls.regular}
//                alt={this.props.image.alt_description} />
//         </div>
//     )
//   }
// }
//
// export default ImageCard

import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spansRows = Math.ceil(height / 10 );
    this.setState({ spans: spansRows });
  }

  render() {
    return (
        <div style={{gridRowEnd: `span ${this.state.spans}`}}>
          <img ref={this.imageRef}
               src={this.props.image.urls.regular}
               alt={this.props.image.alt_description} />
        </div>
    )
  }
}

export default ImageCard;
