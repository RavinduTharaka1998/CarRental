import  React, {Component} from 'react';
import axios from 'axios';



import './css/cusStyle.css';
import logo from './img/logo.png';
import profile from './img/profile.png';


export default  class cusPay extends  Component{


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
                <div className='header-top'>
                    <div className='left'>
                        <img src = {logo} />
                    </div>
                    <div className='middle'>
                        <input type = "text" placeholder='search here....'/>
                    </div>
                    <div className='right'>
                        <a href = "">LogOut</a>
                        <img src = {profile} width="30"/>
                    </div>
                </div>
                <br/>
                <div className="menu-bar">
                    <a href="">Home</a>
                    <a href="">Items</a>
                    <a href="">Rent a Vehicle</a>
                    <a href="">Supply Items</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                </div>
                <br/>
                <h5 style={{marginLeft:200,color:'red'}}>Proceed To Pay</h5>
                <div className="container" style={{marginTop:30}}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Vehicle Id :</label>
                                <input type ="text" required  className="form-control" value={this.state.id} onChange = {this.onChangeId} readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Manufacturer :</label>
                                <input type ="text" required className="form-control" value={this.state.manufacturer} onChange = {this.onChangeManufacturer} readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Rental Price :</label>
                                <input type ="number"  value={this.state.price} onChange = {this.onChangePrice} className="form-control" readOnly/>
                            </div>
                            <hr/>
                            <h4>Customer Details</h4>
                            <hr/>
                            <div className="form-group">
                                <label>Customer Name :</label>
                                <input type ="text"  value={this.state.name} onChange = {this.onChangeName} className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Phone :</label>
                                <input type ="number"  value={this.state.phone} onChange = {this.onChangePhone} className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>e-Mail :</label>
                                <input type ="email"  value={this.state.email} onChange = {this.onChangeEmail} className="form-control"/>
                            </div>
                            <hr/>
                            <h4>Card Details</h4>
                            <hr/>
                            <div className="form-group">
                                <label>Card Number :</label>
                                <input type ="number"  value={this.state.number} onChange = {this.onChangeNumber} className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Ex Date :</label>
                                <input type ="date"  value={this.state.date} onChange = {this.onChangeDate} className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>CVV :</label>
                                <input type ="number"  value={this.state.cvv} onChange = {this.onChangeCvv} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Pay & Purchase" className="btn btn-info"/>
                            </div>
                        </form>
                       
                    </div>
                
                <div className='footer'>
                    <div className='f-left'>
                        <h6>FAQ</h6>
                        <h6>Leave us a feedback</h6>
                        <h6>Contact No 070 256 1245</h6>
                    </div>
                    <div className='f-middle'>
                        <center>
                            <img src = {logo} />
                            <hr/>
                            <h6>Copyright @ 2023 Shantha Motors, All rights reserved</h6>
                        </center>
                    </div>
                    <div className='f-right'>
                        <h6>Tearm & Condition</h6>
                        <h6>Privacy Policy</h6>
                    </div>
                </div>
            </div>
        )
    }
}