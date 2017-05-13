import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from './components/popup';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  render() {
    return (
      <div>
        { this.props.visibility &&
          <Popup translations = { this.props.translation.translations }
                 position = { this.props.popup }/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    visibility: state.visibilityState,
    translation: state.translation,
    popup: state.popup
  }
};

export default connect(mapStateToProps, {})(App);
