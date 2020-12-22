import React from 'react'
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import Login from '../component/Login'
import Logout from '../component/Logout'
import register from '../component/Register'
import product from '../component/Products'
import NotFound from '../component/Notfound'
import Home from '../component/Home'
import AddProduct from '../component/addProduct'
import ProtectedRout from './ProtectedRout'

class  AppRounter extends React.Component{


    render(){
        return (
            <BrowserRouter>
               <Switch>
                    <Route exact  path="/"  component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route  exact path="/register" component={register} />
                    <Route  exact  path="/logout" component={Logout}/>
                    <ProtectedRout   path="/product" component={product}/>
                    <ProtectedRout   path="/addproduct" component={AddProduct}/>
                    <Route path="*" component={NotFound}/>
               </Switch>
                </BrowserRouter>
        )
    }
}

export default AppRounter