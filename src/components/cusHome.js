import  React, {Component} from 'react';
import axios from 'axios';

import CusVehicleTableRow from './CusVehicleTableRow';

import './css/cusStyle.css';
import logo from './img/logo.png';
import profile from './img/profile.png';


export default  class cusHome extends  Component{


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
            return <CusVehicleTableRow obj = {object} key = {i}/>;
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

                <div class="content">
                    <p>Choose Yours...</p>
                   {this.tabRow()}
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