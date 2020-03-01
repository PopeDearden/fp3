import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'



class DirectorLogin extends Component {
  constructor(s) {
    super()
    this.state = {
      email: 'email',
      password: 'pass'
    }
  }
  render() {
    return (

      <div class="Landing-Page">
        <div class="Landing-Left">
          <h1 id="Main-Title">Fundraiser Portal</h1>
          <h1 id="Sub-Title">A Good Always Product</h1>
        </div>
        <div class="Landing-Right">
          <div class="Login-Box">

            <h1 id="Fancy-Title">Director Login</h1>
            <div>
              <h2>Email:</h2>
              <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div>
              <h2>Password:</h2>
              <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            </div>
            <button onClick={()=>console.log(this.state)} id="big">
                Login
              </button>
          </div>

        </div>
      </div>
    )

  }
}

export default withRouter(DirectorLogin);
