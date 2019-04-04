import coinapi from '../api/coinapi'
import {SIGN_IN, SIGN_OUT, GET_ASSETS} from './types'

export const signIn = (userId)=>{
  return{
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = ()=>{
  return{
    type: SIGN_OUT
  }
}
export const getAssets =()=> async (dispatch,getState)=>{
  console.log('about to get assets')
    const response = await coinapi.get('/v1/exchanges', {
    })
    console.log(response)
    dispatch({
      type: GET_ASSETS,
      payload: response.data
    })
  }
