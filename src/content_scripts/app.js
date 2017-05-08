import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  render() {
    return (
      <div>
        Poly Vocab Class
      </div>
    )
  }
}
