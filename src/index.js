import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const icon = require('./assets/svg/sheik/sheik.svg');

import styles from 'style!css?modules!sass!./assets/sass/sheik.scss';

class Sheik extends Component {
  constructor(props) {
    super(props);
    
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.getElementById('sheik').innerHTML = icon;
  }

  render () {
    let stockColor;

    switch (this.props.color) {
      case 1:
        stockColor = styles.costumeOne;
        break;
      case 2:
        stockColor = styles.costumeTwo;
        break;
      case 3:
        stockColor = styles.costumeThree;
        break;
      case 4:
        stockColor = styles.costumeFour;
        break;
      case 5:
        stockColor = styles.costumeFive;
        break;
    }

    return (
      <div id="sheik" className={stockColor}></div>
    );
  }
}

ReactDOM.render(
  <Sheik color={1} />,
  document.getElementById('root')
);
