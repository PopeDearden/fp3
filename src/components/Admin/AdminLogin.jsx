import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import AdminRoutes from '../../routes/AdminRoutes'
import AdminHeader from '../Admin/Adminheader'
import axios from "axios";

// This component acts as the parent of all of Admin's components. The login screen displays if session.manager is blank.
class AdminLogin extends Component {
  constructor(s) {
    super()
    this.state = {
      email: '',
      password: '',
      approved: false,
    }
  }

  componentDidMount(){
    
    axios.get('/api/check-manager')
    .then(res=> {
      console.log(res.data[0])
      if(res.data === 'no manager'){
        this.setState({
          approved:false
        })
        alert('no manager logged in')
        }
        else{
          console.log(res)
          alert(res)
        }
      }
    )
  }

  loginManager=()=>{
    console.log(this.state)
    axios.put('/api/manager', this.state)
    .then(res=> {
      console.log(res.data)
    })
    
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

            <h1 id="Fancy-Title">Admin Login</h1>
            <div>
              <h2>Email:</h2>
              <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div>
              <h2>Password:</h2>
              <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            </div>
            <button onClick={()=>this.loginManager()} id="big">
                Login
              </button>
          </div>

        </div>
        {AdminRoutes}
      </div>
    )

  }
}

export default withRouter(AdminLogin);
