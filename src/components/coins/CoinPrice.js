import React, { Component } from 'react';
const CoinPrice =()=>{
  return(
    <div>CoinPrice</div>
  )
}
// import coinapi from '../api/coinapi'
//
//  class CurrentPrice extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       exchanges: [],
//       coins: [],
//       spot_prices: []
//     };
//   }
//   componentDidMount(){
//     getCoinData async()=>{
//       const response = await coinapi.get('/v1/symbols', {
//       })
//       console.log(response)
//       response.data.map(item=>{
//         this.setState({
//           exchanges: item.exchange_id,
//           coins: item.asset_id_base,
//           spot_prices: item.asset_id_quote
//         })
//       })
//
//     }
//     renderData(){
//
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <select className="ui search dropdown">
//           <option value={exchange}>Exchange</option>
//         </select>
//       </div>
//     );
//   }
//
// }
export default CoinPrice
