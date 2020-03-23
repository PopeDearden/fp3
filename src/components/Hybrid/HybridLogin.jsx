import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import HybridRoutes from '../../routes/HybridRoutes'
import HybridHeader from './HybridHeader'
import Swal from 'sweetalert2'


class DirectorLogin extends Component {
  constructor(s) {
    super()
    this.state = {
        email: 'hybridportal',
      password: '',
      approved: false,

    }
  }

  componentDidMount() {
    this.checkManager()

  }

  checkManager = () => {
    axios.get('/api/check-manager')
    .then(res=> {
      console.log(res.data)
      if(res.data[0] === undefined) {
        this.setState({
          approved: false
        })
        }
        else{
          this.setState({
            approved: true,
          })
          }
        
      }
    )
  }

  loginManager = async () => {
    console.log(this.state)
    await axios.put('/api/manager', this.state)
    .then(res=> {
      console.log()
      if (res.data[0] === undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Login Information!',
          footer: 'Make sure your password is correct'
        })
      }
    })
    await  this.checkManager()
    
  }


  render() {
    if (this.state.approved === true) {
      return (
        <div class="Admin-Page">
          <HybridHeader />
          {HybridRoutes}
        </div>
      )
    } else {

      return (
        <div class="Landing-Page">
          <div class="Landing-Left">
            <h1 id="Main-Title">Fundraiser<br></br> Portal</h1>
            <h1 id="Sub-Title">A Good Always Product</h1>
          </div>
          <div class="Landing-Right">
            <div class="Login-Box">

              <h1 id="Fancy-Title">Hybridlight Login</h1>
              <div class="GradientLine"></div>
              <div>
              </div>
              <div>
                <h2>Password:</h2>
                <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
              </div>
              <button onClick={() => this.loginManager()} id="big">
                Login
                </button>
            </div>

          </div>
        </div>
      )
    }

  }
}

export default withRouter(DirectorLogin);
