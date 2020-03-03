import React, { Component } from "react";
// import './App.css';

import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'




class DirectorHeader extends Component {
  constructor(s) {
    super()
    this.state = {
   
    }
  }

  componentDidMount(){
  }



  
  render() {

 

      return (
  
        <div class="Header">
          <h1 id="Fancy-Title-2">Welcome, {this.props.first_name} {this.props.last_name}</h1>
        <div class="Note-Purple">
        <p>Order's in Progress</p>
       
        </div>
        <div class="Note-Yellow">
        <p>Orders Collected</p>
        </div>
        </div>
      )
    }

}

export default withRouter(DirectorHeader);
