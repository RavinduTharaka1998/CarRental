import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import adminAddVehicle from './components/adminAddVehicle';
import adminViewVehicle from './components/adminViewVehicle';
import adminEditVehicle from './components/adminEditVehicle';
import adminSearchVehicle from './components/adminSearchVehicle';

import cusHome from './components/cusHome';
import cusPay from './components/cusPay';

class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={adminViewVehicle}/>
                        <Route  path='/adminAddVehicle' component={adminAddVehicle}/>
                        <Route  path='/adminEditVehicle/:id' component={adminEditVehicle}/>
                        <Route  path='/adminSearchVehicle/:id' component={adminSearchVehicle}/>

                        <Route  path='/cusHome' component={cusHome}/>
                        <Route  path='/cusPay/:id' component={cusPay}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;