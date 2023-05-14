import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


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
           <tr>
                <td>
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86MIuNveYiJjN7Ix3qDID7Swdd1J7w_PKrw&usqp=CAU" width="200"/>
               </td>
               <td>
                    <h6> {this.props.obj.id}</h6>
               </td>
               <td>
                    <h6>{this.props.obj.type}</h6>
               </td>
               <td>
                    <h6> {this.props.obj.manufacturer}</h6>
               </td>
               <td>
                    <h6>{this.props.obj.year}</h6>
               </td>
               <td>
                    <h6>{this.props.obj.passengers}</h6>
               </td>
               <td>
                  <h6> {this.props.obj.price} LKR</h6>
               </td>
               <td>
                    <h6>{this.props.obj.status}</h6>
               </td>
               <td>
                   <Link to={"/adminEditVehicle/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;