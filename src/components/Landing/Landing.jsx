import React, { Component } from "react";
import '../../App.scss'
// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'



class Landing extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App" >
        {/* <div className="Landing-Bar"></div> */}
        <div class="Landing-Page">
          <div class="Landing-Left">
          
            <h1 id="Main-Title">Fundraiser <br></br>Portal</h1>
            <h1 id="Sub-Title">A Good Always Product</h1>
          </div>
     
            <div class="Login-Box">
              <button id="big" onClick={()=>this.props.history.push('/director')}>
                Login as Director
              </button>
              <button id="big" onClick={()=>this.props.history.push('/user')}>
                Login as Student
              </button>
           
          </div>
        </div>
      </div>
    )

  }
}

export default Landing;
