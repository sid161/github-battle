import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <>
    <h1>Loading...</h1>
    </>
  }
}

export default Loader;