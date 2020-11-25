
import {isLogin} from '../Auth/Auth'
import { Route, Redirect } from "react-router-dom";

const ProtectedRout = ({ path, component: Component, render,role ,...rest }) =>{

    return (
       
        <Route
        {...rest}
            render={props => {
                if(isLogin()){
                        return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state: { from: props.location }
                        }
                    } />
                }
            }
            }
        />
    )


}


export default ProtectedRout;