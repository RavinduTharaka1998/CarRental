import  React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';


import './css/cusStyle.css';
import logo from './img/logo.png';
import profile from './img/profile.png';


export const CusPay = () => {
       const form = useRef();
       const params = useParams();

       console.log(params.id)

       const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nxw06lw', 'template_5hrsyue', form.current, 'M1qoTWPNn2PyJbwJg')
          .then((result) => {
              console.log(result.text);
              alert("Your Message successfully Send...")
              window.location.replace('/cusHome');
          }, (error) => {
              console.log(error.text);
          });
       };


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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Rental Price :</label>
                                <input type ="number" name = "rental_price" value={params.id}  className="form-control" readOnly/>
                            </div>
                            <hr/>
                            <h4>Customer Details</h4>
                            <hr/>
                            <div className="form-group">
                                <label>Customer Name :</label>
                                <input type ="text"  name = "name" className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>Phone :</label>
                                <input type ="number" name = "phone"  className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>e-Mail :</label>
                                <input type ="email" name = "email"  className="form-control" required/>
                            </div>
                            <hr/>
                            <h4>Card Details</h4>
                            <hr/>
                            <div className="form-group">
                                <label>Card Number :</label>
                                <input type ="number"   className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>Ex Date :</label>
                                <input type ="date" name = "date"  className="form-control" required/>
                            </div>

                            <div className="form-group">
                                <label>CVV :</label>
                                <input type ="number" name = "cvv" className="form-control" required/>
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