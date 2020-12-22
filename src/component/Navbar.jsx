import React, { Component } from 'react';
import { Link, NavLink,BrowserRouter } from 'react-router-dom';
import axios from 'axios'
import './Nav.css'
class Navbar extends Component{

  constructor(props){
      super(props)
  }



  render(){
    return (
        <nav id="navbar" className="row navbar navbar-expand-lg navbar-light fixed-top navbarDashboard styledNav"style={{backgroundColor:"#e2e2ec"  }}>
          <div className="navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
           
                <Link className="nav-link butons-header" to="/login">
                login
                </Link>
             
              </li>
              <li className="nav-item">
         
                <Link className="nav-link butons-header" to="/product">
                Products
                </Link>
            
              </li>
              <li className="nav-item">
         
              <Link className="nav-link butons-header" to="/addproduct">
              Add Product
              </Link>
          
            </li>
              <li className="nav-item">
           
                <Link className="nav-link butons-header" to="/register">
                register
                </Link>
              
              </li>
         
                <li className="nav-item">
              
                  <Link className="nav-link butons-header" to="/logout" >
                  logout
                  </Link>
            
                </li>
            </ul>
          </div>

  
        </nav>
      )
  }
}

export default Navbar;