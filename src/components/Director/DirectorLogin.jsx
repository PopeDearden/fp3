import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import DirectorRoutes from '../../routes/DirectorRoutes'
import DirectorHeader from './DirectorHeader'
import Swal from 'sweetalert2'


class DirectorLogin extends Component {
  constructor(s) {
    super()
    this.state = {
      email: '',
      password: '',
      approved: false,
      first_name: '',
      last_name: '',
    }
  }

  componentDidMount() {
    this.checkDirector()
  }

  checkDirector = () => {
    axios.get('/api/check-director')
      .then(res => {
        console.log(res.data)
        if (res.data === 'no director') {
          this.setState({
            approved: false
          })
          // alert('no director logged in')
        }
        else {
          this.setState({
            approved: true,
            first_name: res.data[0].first_name,
            last_name: res.data[0].last_name

          })
          console.log(res.data[0])
          // alert(res.data[0].email + ' is logged in with tag '+ res.data[0].tag )
          // this.props.history.push('/admin')
        }

      }
      )
  }

  loginDirector = async () => {
    console.log(this.state)
    await axios.put('/api/director', this.state)
      .then(res => {
        if (res.data[0] === undefined) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Login Information!',
            footer: 'Make sure your email and password are correct'
          })
        }
         console.log(res.data[0])
        })
        await this.checkDirector()
  }


  render() {
    if (this.state.approved === true) {
      return (
        <div class="Admin-Page">
          <DirectorHeader
            first_name={this.state.first_name}
            last_name={this.state.last_name} />
          {DirectorRoutes}

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

              <h1 id="Fancy-Title">Director Login</h1>
              <div class="GradientLine"></div>
              <div>
                <h2>Email:</h2>
                <input value={this.state.email} onChange={e => this.setState({ email: e.target.value.toLowerCase() })} />
              </div>
              <div>
                <h2>Password:</h2>
                <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
              </div>
              <button onClick={() => this.loginDirector()} id="big">
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
