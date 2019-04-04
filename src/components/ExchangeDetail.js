import React, { Component } from 'react';


 class ExchangeDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {exchange_id, website, name} = this.props.exchange
    return (
      <div className="ui list">
        <div className="item">
          <div className="header">{exchange_id}</div>
          <div className="description">Cryptocurrency Traded: {name}</div>
          <a className="description">{website}</a>
        </div>

      </div>
    );
  }

}
export default ExchangeDetail
