import http from './httpService'
import {apiUrl} from '../config.json'
import {login} from '../services/authService'
const  endPoint=`${apiUrl}/User/register`
  //Register User
  const headers = {
    'Content-Type': 'application/json'
  }
  export function register(User){
      return http.post(endPoint,JSON.stringify(User),{ headers:{'Content-Type':'application/json'}})
        .then(()=>login(User))
}
  