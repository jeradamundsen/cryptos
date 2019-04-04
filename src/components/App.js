import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './Landing'
import MyPortfolio from './MyPortfolio'
import CoinDelete from './coins/CoinDelete'
import CoinEdit from './coins/CoinEdit'
import CoinList from './coins/CoinList'
import CoinTrade from './coins/CoinTrade'
import CoinPrice from './coins/CoinPrice'
import Header from './Header'
import coinapi from '../api/coinapi'
const App =()=>{
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Landing}/>
            <Route path="/portfolio" component={MyPortfolio}/>
            <Route path="/coins/trade" exact component={CoinTrade}/>
            <Route path="/coins/edit" exact component={CoinEdit}/>
            <Route path="/coins/delete" exact component={CoinDelete}/>
            <Route path="/coins/price" exact component={CoinPrice}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  export default App
