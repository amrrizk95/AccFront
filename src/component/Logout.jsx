import React from 'react'
import { logOut } from '../services/authService';

class  Logout extends React.Component{

        componentDidMount(){
            logOut()
            window.location = '/';
        }
    render(){
        return(
            null
        )
    }
}

export default Logout