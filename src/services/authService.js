import http from './httpService'
import {apiUrl} from '../config.json'
import jwtDecode from 'jwt-decode';
import qs from 'qs'


const apiEndpoint = `${apiUrl}/User/authenticate`;
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const tokenKey = "token";
  
export async function login(User) {
    await http.post(apiEndpoint,JSON.stringify(User),{ headers:{'Content-Type':'application/json'}})
        .then(
            (res)=>{
                localStorage.setItem(tokenKey,res.data.token)
                console.log(res.data)
            }
        )
} 


export function logOut(){
    localStorage.removeItem("token")
}

export  function getCurrentUser() {
    try {
        let jwt = localStorage.getItem("token")
        return jwtDecode(jwt)
    } catch (error) {
        return null
    }
}
export default {
    login 
}
