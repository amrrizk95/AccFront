
import React, { Component,Fragment } from 'react'
import Navbar from './Navbar';
import {Link}from 'react-router-dom'
import DataTable from 'react-data-table-component';
import axios from 'axios'








const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Address',
      selector: 'address',
      sortable: true,
      right: true,
    },
    {
        name: 'Visit Date',
        selector: 'visitDate',
        sortable: true,
        right: true,
      },
      {
        name: "Car",
        selector: 'car[name]',
        sortable: true,
        right: true,
      },
      {
        name: "Heard about us",
        selector: 'heardAboutUs.name',
        sortable: true,
        right: true,
      },
  ];
class Customer extends Component {

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get("https://localhost:44300/api/Customers").
        // then(res=>console.log(res.data)).
        then(res=>{
          let resData=res.data
          this.setState({data:resData})
        }
    ).then(()=>console.log(this.state.data))
}
    render(){

        return(
            <Fragment>
                <div className="row">
                 <Navbar/>
                </div>
<div className="styleDiv">

                <DataTable
                    title="Customers"
                    columns={columns}
                    data={this.state.data}
                   
                />
</div>
                 </Fragment>
        )
    }

}

export default Customer;