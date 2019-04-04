import React, { Component } from 'react';
import {connect} from 'react-redux'


import {getAssets} from '../actions'

 class Landing extends Component {
    componentDidMount(){
      this.props.getAssets()
    }
  renderAssets(props) {
    return this.props.assets.map((asset)=>{
      return(
        <div className="item" key={asset.symbol_id}>
          <div>{asset.symbol_id}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderAssets()}
    </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    assets: state.assets
  }
}
export default connect(mapStateToProps,{getAssets})(Landing)
