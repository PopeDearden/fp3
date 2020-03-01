import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import AdminRoutes from '../../routes/AdminRoutes'



class AdminLogin extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "App" >
     <h1>Admin Login and Path</h1>
   {AdminRoutes}
      </div>
    )

  }
}

export default withRouter(AdminLogin);
