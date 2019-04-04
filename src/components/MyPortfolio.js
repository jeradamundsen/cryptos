import React, { Component } from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

export default class MyPortfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coinValues: [10000, 5000,2000,1000]
    };
  }

  render() {
    return (
      <div>
        <Sparklines data={this.state.coinValues}>
          <SparklinesBars/>
        </Sparklines>
      </div>
    );
  }

}
