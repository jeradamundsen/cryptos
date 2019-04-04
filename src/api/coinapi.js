
import axios from 'axios'
var config = require('./keys')

export default axios.create({
  baseURL: 'https://rest.coinapi.io/',
  headers:{
    Authorization: config.coinapi
  }
})
