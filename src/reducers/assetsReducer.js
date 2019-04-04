import {GET_ASSETS} from '../actions/types'

export default(state=[], action)=>{
  switch(action.type){
    case GET_ASSETS:
      return action.payload
   default:
     return state
  }
}
