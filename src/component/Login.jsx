
import React, { Component,Fragment } from 'react'
import Navbar from './Navbar';
import auth from '../services/authService'
import { getCurrentUser } from '../services/authService'
import axios from 'axios'


class Login extends Component {

        constructor(props){
                super(props);
                this.handelSubmit = this.handelSubmit.bind(this);
                this.handleChange = this.handleChange.bind(this);
                this.loginUser = this.loginUser.bind(this)
              

                this.state={
                    data: {
                        Username: '',
                        Password: ''
                    },
                    userNameError: '',
                    passwordError: ''
                }
        }
        validate = () => {
            let userNameError = "";
            let passwordError = "";
    
            if (!this.state.data.Username) {
                userNameError = "invalid Username";
            }
    
            if (!this.state.data.Password || this.state.data.Password.length < 6) {
                passwordError = "invalid Password";
            }
    
            if (userNameError || passwordError) {
    
                this.setState({ userNameError, passwordError });
                return false;
            }
    
            return true;
        }; 
        handleChange(e) {
            const data = { ...this.state.data };
            data[e.target.name] = e.target.value;
            this.setState({ data });
        }; 
        
        loginUser  ()  {
            const isValid = this.validate();
            if  (isValid){
                try{
                        let User=this.state.data
                        auth.login(User).
                        then((res)=>{
                            console.log(res)
                        const {state} = this.props.location;
                       window.location= state? state.from.pathname: `/customer`;
                        }).
                        catch((err)=>{
                            let userNameError = "invalid user name or Password";
                            let passwordError = "invalid user name or Password";
                            this.setState({userNameError,passwordError});
                        })
                }
                catch(ex){
                     let userNameError = "invalid user name or Password";
                     let passwordError = "invalid user name or Password";
                     this.setState({userNameError,passwordError});
                }
            }
        } 
  
        handelSubmit(e) {
            e.preventDefault();
            this.loginUser()
        }
    

    render(){ 
        const { data } = this.state;
        return(
            <Fragment>
                 <Navbar/>
                 <div className="styleDiv parent">
                <div className="form-model font-bold h-100">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-lg-6 col-md-7 col-sm-8 col-offset-sm-2 loginForm">
                                <form  >
                                    <h3>Sign In</h3>

                                    <div className="form-group">
                                        <label>Email </label>
                                        <input value={data.Username} onChange={this.handleChange}  type="email" className="form-control" name="Username"  placeholder="Enter email"  />
                                        {this.state.userNameError && <div className="alert alert-danger">{this.state.userNameError}</div>}
                                   
                                    </div>

                                    <div className="form-group">
                                        <label >Password</label>
                                        <input value={data.Password} onChange={this.handleChange}  type="Password" className="form-control" name="Password"  placeholder="Enter Password"  />
                                        {this.state.passwordError && <div className="alert alert-danger">{this.state.passwordError}</div>}
                                     
                                    </div>



                                    <button  type="submit" className="btn btn-success" onClick={this.handelSubmit} >
                                    
                                  Login</button>
                               
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                 </Fragment>
        )
    }

}

export default Login;