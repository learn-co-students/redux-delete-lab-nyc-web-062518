import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props);
    return(
      <li>
        <span>{this.props.band.name} </span><button onClick={() => this.props.deleteBand(this.props.band)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
