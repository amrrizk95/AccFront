import React, { Component,Fragment } from 'react'
const $=require('jquery');
$.DataTable=require('datatables.net')

export class DT extends Component{ 
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
       
        this.handelChange=this.handelChange.bind(this)
        this.intiatDataTable=this.intiatDataTable.bind(this)
        this.reintiatDataTable=this.reintiatDataTable.bind(this)
    }
    componentDidMount(){
            this.intiatDataTable(this.props.data);
 
    
    } 
    componentDidUpdate(){
         console.log(this.props.changedRow)   
         this.handelChange(this.props.changedRow)
    } 
    componentWillUnmount(){
        this.$el.DataTable().destroy(true)
    }

    intiatDataTable(data){
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data:data,
                columns:[
                    { data: "id" ,title:"Id"},
                    { data: "name",title:"Name" },
                    { data: "price",title:"Price" },
                    { data: "description",title:"Description" }
                ],
                searching: false, paging: false, info: false

            })
    } 
    reintiatDataTable(data){
        this.$el.DataTable().destroy(true)
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data:data,
                columns:[
                    { data: "id" ,title:"Id"},
                    { data: "name",title:"Name" },
                    { data: "price",title:"Price" },
                    { data: "description",title:"Description" }
                ],
                searching: false, paging: false, info: false

            })
    }
    handelChange(_row){
        //let $this=this;
        let table=this.$el.DataTable();
        table.rows().eq(0).each(function(index){
            let row = table.row(index);
            let data = row.data();
            if(data.id==_row.Id){ 
                console.log("yes")
                var temp = table.row(index).data();
                temp.price = _row.Price;
                console.log("temp",temp)  
                table.row(index).data(temp).draw(true)  
            }
        })
        
    }
render(){
    return <div>
        <table   width="80%" ref={el=>this.el=el}>

        </table>
    </div>
}
}
