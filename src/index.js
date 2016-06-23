import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let SheikNormal = require('./assets/svg/sheik/sheik-normal.svg');

class StockIcon extends Component {
  constructor(props) {
    super(props);
    
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.getElementById('sheik').innerHTML = SheikNormal;
  }

  render () {
    return (
      <div id="sheik"></div>
    );
  }
}

ReactDOM.render(
  <StockIcon />,
  document.getElementById('root')
);
