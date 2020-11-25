
import {getCurrentUser} from '../services/authService'

export function isLogin(){
    let user =getCurrentUser();
    if(!user){
        return false 
    }
    else{
        return true 
    }
}