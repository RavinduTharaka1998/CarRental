import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/cusStyle.css';


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/rental/admindeletevehicle/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Vehicle Successfully Deleted....")
        window.location.replace('/');
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <img src = "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-2-Series-Gran-Coupe-271220221147.jpg" width="400"/>
                    </div>

                    <div className='col'>
                        <table className="table table-striped">
                            <tr>
                                <td style={{fontWeight:'bold'}}>Id</td>
                                <td>{this.props.obj.id}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:'bold'}}>Vehicle Type</td>
                                <td>{this.props.obj.type}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:'bold'}}>Manufacturer</td>
                                <td>{this.props.obj.manufacturer}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:'bold'}}>Manufactured Year</td>
                                <td>{this.props.obj.year}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:'bold'}}>Passengers</td>
                                <td>{this.props.obj.passengers}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:'bold'}}>Rental Fee</td>
                                <td>{this.props.obj.price}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:'bold'}}>Status</td>
                                <td>{this.props.obj.status}</td>
                            </tr>
                            <tr>
                                <td> <Link to={"/cusPay/"+this.props.obj._id} className="btn btn-success">Purchase</Link></td>
                            </tr>
                        </table>
                        <br/>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default TableRow;