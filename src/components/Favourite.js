import React, { Component } from "react";
import * as Request from "../modules/request.js";
import "./Favourite.css";

class Favourite extends Component {
  constuctor(props) {
    super(props);
    this.state = {favourite: false};
  }

  componentDidMount() {
    this.isRecipeFavourite();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.isRecipeFavourite();
    }
  }

  isRecipeFavourite = () => {
    Request.checkIfFavourite(this.props.id).then(response => {
      if (response) {
        this.setState({favourite: true});
      } else {
        this.setState({favourite: false});
      }
    });
  }

  toggle = () => {
    if (this.state.favourite) {
      Request.removeFromFavourites(this.props.id).then(response => {
        this.setState({favourite: false});
      }).catch(err => {
        console.error(err.message);
      });
    } else {
      Request.addToFavourites(this.props.id).then(response => {
        this.setState({favourite: true});
      }).catch(err => {
        console.error(err.message);
      });
    }
  }

  render() {
    return (
      <div>
        <i title="Add to favourites" onClick={this.toggle} className={this.state.favourite ? "fa fa-heart" : "fa fa-heart-o"} />
      </div>
    );
  }
}

export default Favourite;
