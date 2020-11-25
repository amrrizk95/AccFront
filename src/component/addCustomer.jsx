import Navbar from '../component/Navbar'
import React,{Fragment} from 'react'
import axios from 'axios'
import {add} from '../services/customerService'



class AddCustomer extends React.Component {

        constructor(props){
                super(props)
                this.state={
                    customer:{
                        Name:"",
                        Address:"",
                        VisitDate:"",
                        CarId:"",
                        HeardAboutUsId:""
                    }
                }
                this.handleChange=this.handleChange.bind(this);
                this.handelSubmit=this.handelSubmit.bind(this);
                this.validat=this.validat.bind(this);
        }
        handleChange(e) {
            const customer = { ...this.state.customer };
            customer[e.target.name] = e.target.value;
            this.setState({ customer });
            console.log(this.state.customer)
        }; 
        validat(){
            let name=this.state.customer.Name;
            let address=this.state.customer.Address;
            let VisitDate=this.state.customer.VisitDate;
            let CarId=this.state.customer.CarId;
            let HeardAboutUsId=this.state.customer.HeardAboutUsId
            debugger
            if(name&&address&&VisitDate&&CarId&&HeardAboutUsId){
               return true
            }else{
                return false;
              
            }
        }
        addCustomer(){
           let {customer}=this.state
            add(customer)
            .then(()=>{
                const {state} = this.props.location;
                 window.location= state? state.from.pathname: `/customer`;
            })
        }
        handelSubmit(e) {
            debugger
            e.preventDefault();
            let result=this.validat();
            if  (result){
                    this.addCustomer()
            }
           else{
                alert("please complete customer customer")
            }
        }


    render (){ 
        console.log(this.state.customer)
        return  (
            <Fragment>
                <Navbar/>
                <div className="styleDiv col-md-6 col-sm-12">
                <form className="align-items-center">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="Name" value={this.state.customer.Name} placeholder="Customer Name" onChange={this.handleChange}/>
                            </div> 
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" name="Address" value={this.state.customer.Address} placeholder="Customer Address" onChange={this.handleChange}/>
                            </div> 
                            <div className="form-group">
                                <label>VisitDate</label>
                                <input type="date" className="form-control" name="VisitDate" value={this.state.customer.VisitDate} placeholder="Visit Date" onChange={this.handleChange}/>
                            </div> 

                            <div className="form-group">
                                <label > select Car</label>
                                <select className="form-control" name="CarId" value={this.state.customer.CarId}  onChange={this.handleChange}>
                                <option >Please select one</option>
                                    <option value="1">Alfa </option>
                                    <option value="2">Lancia  </option>
                                    <option value="3">BMC </option>
                                    <option value="4">BMW  </option>
                                    <option value="5">Chevrolet </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label > Heard About Us</label>
                                <select className="form-control" name="HeardAboutUsId" value={this.state.customer.HeardAboutUsId}  onChange={this.handleChange}>
                                    <option >Please select one</option>
                                    <option value="1">Social media </option>
                                    <option value="2">News Paper  </option>
                                    <option value="3">Web site </option>
                                </select>
                            </div>
                
                            <button type="submit" className="btn btn-primary" onClick={this.handelSubmit}>Add</button>
                    </form>
            </div>

            </Fragment>
       
        )
    }
}


export default AddCustomer