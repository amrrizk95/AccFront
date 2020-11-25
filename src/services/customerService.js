import http from './httpService'
import {apiUrl} from '../config.json'


const apiEndpoint = `${apiUrl}/Customers`;
  // add customer 
  export function add(customer){
    return http.post(apiEndpoint,JSON.stringify(customer),{ headers:{'Content-Type':'application/json'}});
}