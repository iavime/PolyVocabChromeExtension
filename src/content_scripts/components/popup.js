import React from 'react'
import Radium from 'radium';

const Popup = ({ translations, position }) => (
  <div style={[styles.popup, { top: position.y + 10, left: position.x - 10 }]}>
    { translations.map(trans => <div> { trans } </div>) }
  </div>
);

const styles = {
  popup: {
    background: '#f7f7f7',
    border: '1px solid #c8c8c8',
    borderRadius: '3px',
    boxShaddow: '0 3px 7px rgba(0,0,0,.2)',
    padding: '6px',
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: '15px',
    zIndex: '100000'
  }
}

export default Radium(Popup);
