import  React, {Component} from 'react';
import axios from 'axios';

import AdminVehicleTableRow from './AdminVehicleTableRow';

import './css/style.css';
import logo from './img/logo.png';
import profile from './img/profile.png';


export default  class adminSearchVehicle extends  Component{


    constructor(props){
        super(props);

        this.onChangeSearch = this.onChangeSearch.bind(this);

        this.state = {vehicle : []};
    }

    componentDidMount() {
       
        axios.get('http://localhost:4000/rental/admisearchvehicle/'+this.props.match.params.id)
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
                            <div className="form-group" style ={{float:'right'}}>
                                <a href ={"/"} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
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
                    
                </div>
            </div>
        )
    }
}