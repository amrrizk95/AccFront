
import React, { Component,Fragment } from 'react'
import Navbar from '../component/Navbar'
import {Link}from 'react-router-dom'
import axios from 'axios'
import {register} from '../services/userService'


class Register extends Component {

    constructor(props){
        super(props)
        this.handelSubmit = this.handelSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate=this.validate.bind(this);
        this.register=this.register.bind(this)
        this.state={
            data:{
                Username:'',
                Name:'',
                Password:'',
            },
                userNameError:'',
                emailError:'',
                passwordError:'',
        }
    } 


    validate =  ()=> {
        let userNameError = "";
        let emailError="";
        let passwordError = "";

        if (!this.state.data.Username) {
            userNameError = "invalid Username";
        }
        if (!this.state.data.Name) {
            emailError = "invalid Name";
        }

        if (!this.state.data.Password || this.state.data.Password.length < 6) {
            passwordError = "invalid Password";
        }
    

        if (userNameError || passwordError||emailError) {

            this.setState({ userNameError, passwordError ,emailError});
            return false;
        }

        return true;
    }; 

    handleChange(e) {
        console.log(this.state.data)
        const data = { ...this.state.data };
        data[e.target.name] = e.target.value;
        this.setState({ data });
    };
    
    register(event) {  
        event.preventDefault();
        debugger
        const isValid = this.validate()
        if(isValid){
         
            let User=this.state.data
            debugger
                try{
                   register(User).
                    then((res)=>{
                        const {state} = this.props.location;
                        window.location= state? state.from.pathname: `/customer`;
                    }).catch((err)=>console.log(err))
                }catch{
                    let userNameError = "invalid user name or Password";
                    let passwordError = "invalid user name or Password";
                    let emailError = "invalid user name or Password";
                    this.setState({userNameError,passwordError,emailError});
                }
        }
      }  
     handelSubmit(e) {
        e.preventDefault();
        this.register()
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
                        <div className="col-lg-6 col-md-7 col-sm-8 col-offset-sm-2 RegisterForm">
                                <form  >
                                    <h3>Sign Up</h3>
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input  type="text" className="form-control" placeholder="User Name" name='Username'  onChange={this.handleChange} value={data.Username}   />
                                        {this.state.userNameError && <div className="alert alert-danger">{this.state.userNameError}</div>}
                             
                                    </div>

                                    <div className="form-group">
                                        <label>Name </label>
                                        <input type="Name" className="form-control" placeholder="Enter Name" name="Name" value={data.Name} onChange={this.handleChange} />
                                        {this.state.userNameError && <div className="alert alert-danger">{this.state.userNameError}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="Password" className="form-control" placeholder="Enter Password" name="Password"  value={data.Password} onChange={this.handleChange}  />
                                        {this.state.passwordError && <div className="alert alert-danger">{this.state.passwordError}</div>}
                                    </div>
                               
                                    <button type="submit" className="btn btn-success" onClick={this.register}>Sign Up</button>
                                    <p className="forgot-Password text-right">
                                       Already registered ? <Link to="/login">sign in</Link>
                                    </p>
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

export default Register;