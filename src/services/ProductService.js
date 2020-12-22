import http from './httpService'
import {apiUrl} from '../config.json'


const apiEndpoint = `${apiUrl}/Products`;
  // add customer 
  export function add(product){
    return http.post(apiEndpoint,JSON.stringify(product),{ headers:{'Content-Type':'application/json'}});
}