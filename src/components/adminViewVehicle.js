import  React, {Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import AdminVehicleTableRow from './AdminVehicleTableRow';

import './css/style.css';
import logo from './img/logo.png';
import profile from './img/profile.png';


export default  class adminViewVehicle extends  Component{


    constructor(props){
        super(props);

        this.onChangeSearch = this.onChangeSearch.bind(this);

        this.state = {vehicle : [], search:''};
    }

    componentDidMount() {
       
        axios.get('http://localhost:4000/rental/admiviewvehicle/')
            .then(response => {
                this.setState({vehicle : response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.vehicle.map(function (object, i){
            return <AdminVehicleTableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Vehicle Report";
        const headers = [["ID","Vehicle Type", "Manufacturer","Year", "Passengers","Price", "Status"]];
    
        const data = this.state.vehicle.map(elt=> [elt.id, elt.type, elt.manufacturer, elt.year,elt.passengers, elt.price,elt.status]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("MilkMachineReport.pdf")
      }
   
    render() {
        return(
            <div>
                <div class="sidebar">
                        <center>
                            <img src = {logo} />
                        
                            <a href="/">Employee</a>
                            <a href="/">Customer</a>
                            <a href="/">Supplier</a>
                            <a href="/">Rentals</a>
                            <a href="/">Spare Parts</a>
                            <a href="/">Inventory</a>
                            <a href="/">Payment</a>
                            <a href="/">Utility Bills</a>
                        </center>
                </div>

                <div class="content">
                    <div className='top'>
                        <a href = "">LogOut</a>
                        <img src = {profile} width="30"/>
                    </div>
                    <p>VEHICLE MANAGEMENT</p>

                    <div className="container" style={{marginTop:10}}>
                        <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                            </div>
                            <div className="form-group" style ={{float:'right'}}>
                                <a href ={"/adminSearchVehicle/"+this.state.search} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                            </div>
                        </from>
                        <button className='btn btn-info'><a href='/adminAddVehicle' style={{textDecoration:'none',color:'white'}}> + Add New Vehicle</a></button>
                        <table className="table table-striped" style = {{marginTop :20}}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Id</th>
                                        <th>Type</th>
                                        <th>Manufacturer</th>
                                        <th>Year</th>
                                        <th>Passengers</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabRow()}
                                </tbody>
                        </table>
                    </div>
                    <br/>
                    <button className='btn btn-dark' onClick={() => this.exportPDF()} style={{marginLeft:100}}>-- Export --</button>
                </div>
            </div>
        )
    }
}