
import React, { Component,Fragment } from 'react'
import Navbar from './Navbar';
import axios from 'axios'
import {DT} from './TbL'
import * as SignalR from '@aspnet/signalr';







class product extends Component {

    constructor(props){
        super(props)
        
        this.state={
            data:[],
            changedRow:''
        }
    }
    componentDidMount(){

        let $this=this;
        axios.get("https://localhost:44300/api/products").
        then(res=>{
          let resData=res.data
          this.setState({data:resData})
        } 
        )
        const hubConnection = new  SignalR.HubConnectionBuilder().withUrl("https://localhost:44300/changePrice/",{
            skipNegotiation:true,
            transport: SignalR.HttpTransportType.WebSockets
        })
        .build();
        
        hubConnection.on('changeProductPrice',function (data) {
            var parsedData= JSON.parse(data)
            $this.setState({changedRow:parsedData.Result})
        })
        hubConnection.start() 
        hubConnection.serverTimeoutInMilliseconds = 100000;
        const startSignalRConnection = connection => connection.start()
            .then(() => console.info('Websocket Connection Established'))
            .catch(err => console.error('SignalR Connection Error: ', err));
            hubConnection.onclose(() => setTimeout(startSignalRConnection(hubConnection), 5000));
        }


    render(){

        return(
            <Fragment>
                <div className="row"> 
                 <Navbar/>
                </div>

                <div className="styleDiv">
                        <DT data={this.state.data} changedRow={this.state.changedRow}  />
                    
                </div>
                 </Fragment>
        )
    }

}

export default product;