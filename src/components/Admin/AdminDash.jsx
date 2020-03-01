import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'



class AdminDash extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "App" >
     <h1> AdminDash</h1>
      </div>
    )

  }
}

export default AdminDash;
