import React from 'react';
import ExchangeDetail from './ExchangeDetail'


const ExchangeList =(props)=>{
  const exchanges=(props)=>{props.exchanges.map(exchange=>{
     return <ExchangeDetail exchange={exchange} key={exchange.exchange_id}/>
       })
    }
  return(
        <div className="ui list">
          {exchanges}
        </div>
      );

}







export default ExchangeList
