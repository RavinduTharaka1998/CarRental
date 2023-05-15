import  React, {Component} from 'react';
import axios from 'axios';

import './css/style.css';
import logo from './img/logo.png';
import profile from './img/profile.png';


export default  class adminEditVehicle extends  Component{


    constructor(props){
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePassengers = this.onChangePassengers.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            type: '',
            manufacturer:'',
            year:'',
            passengers:'',
            price:'',
            status:''
        }
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/rental/admineditvehicle/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    type: res.data.type,
                    manufacturer: res.data.manufacturer,
                    year: res.data.year,
                    passengers: res.data.passengers,
                    price: res.data.price
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }
    onChangeId(e){
        this.setState( {
           id: e.target.value
        });
    }
    onChangeType(e){
        this.setState( {
            type: e.target.value
        });
    }
    onChangeManufacturer(e){
        this.setState( {
            manufacturer: e.target.value
        });
    }
    onChangeYear(e){
        this.setState( {
            year: e.target.value
        });
    }
    onChangePassengers(e){
        this.setState( {
            passengers: e.target.value
        });
    }
    onChangePrice(e){
        this.setState( {
            price: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.state.status = "Available";
       
        const obj = {
            id : this.state.id,
            type : this.state.type,
            manufacturer : this.state.manufacturer,
            year : this.state.year,
            passengers : this.state.passengers,
            price : this.state.price,
            status : this.state.status
        };

       
       
                        axios.post('http://localhost:4000/rental/adminupdatevehicle/'+this.props.match.params.id,obj)
                        .then(res => {
                            alert("Vehicle Update Successfully");
                            this.setState({
                                id: '',
                                type: '',
                                manufacturer:'',
                                year:'',
                                passengers:'',
                                price:''
                    
                            })
                            console.log(res.data)});
                        window.location.replace('/');
                    
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
                    <p>EDIT VEHICLE</p>
                    <div className="container" style={{marginTop:10}}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Vehicle Id :</label>
                                <input type ="text" required  className="form-control" value={this.state.id} onChange = {this.onChangeId}/>
                            </div>
                            <div className="form-group">
                                <label>Vehicle Type :</label>
                                {/* <input type ="time" required className="form-control" value={this.state.arrival} onChange = {this.onChangeArrivalTime}/> */}
                                <select required className="form-control" value={this.state.type} onChange = {this.onChangeType}>
                                    <option value={this.state.type}>{this.state.type}</option>
                                    <option value = "Car">Car</option>
                                    <option value = "Van">Van</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Manufacturer :</label>
                                <input type ="text" required className="form-control" value={this.state.manufacturer} onChange = {this.onChangeManufacturer}/>
                            </div>
                            <div className="form-group">
                                <label>Manufactured Year :</label>
                                <input type ="number"  value={this.state.year} onChange = {this.onChangeYear} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Max Passengers :</label>
                                <input type ="number"  min = "2" value={this.state.passengers} onChange = {this.onChangePassengers} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Rental Price :</label>
                                <input type ="number"  value={this.state.price} onChange = {this.onChangePrice} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Update Vehicle" className="btn btn-info"/>
                            </div>
                        </form>
                        <button className='btn btn-dark'><a href='/' style={{textDecoration:'none',color:'white'}}> View Vehicle</a></button>
                    </div>
                </div>
            </div>
        )
    }
}