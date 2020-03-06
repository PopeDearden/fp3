import React, { Component } from "react";

// import './App.css';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import UserRoutes from '../../routes/UserRoutes'
import UserHeader from '../User/UserHeader'


class UserLogin extends Component {
  constructor(s) {
    super()
    this.state = {
      username: '',
      password: '',
      tag: '',
      approved: false
    }
  }
  
  componentDidMount() {
    this.checkStudent()
  }
  checkStudent = () => {
    axios.get('/api/check-student')
      .then(res => {
        if (res.data === 'no student'|| res.data[0] === undefined){
          this.setState({
            approved: false
          })
        }
        else {
          this.setState({
            approved: true,
            username_name: res.data[0].username,
            director_tag: res.data[0].director_tag

          })
          console.log(res.data)
   
        }

      }
      )
  }
  loginStudent = () => {
    console.log(this.state)
    axios.put('/api/student', this.state)
      .then(res => {
        console.log(res.data[0])
        if (res.data[0] === undefined) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Login Information!',
            footer: 'Make sure your email and password are correct'
          })
        }
        console.log(res.data)
        this.checkStudent()
      })
  }
  render() {
    if (this.state.approved === true) {
      return (
        <div class="Admin-Page">
          <UserHeader
            username = {this.state.username} 
            tag = {this.state.tag}/>
          {UserRoutes}

        </div>
      )
    }
    else{
      return (
  
        <div class="Landing-Page">
          <div class="Landing-Left">
            <h1 id="Main-Title">Fundraiser Portal</h1>
            <h1 id="Sub-Title">A Good Always Product</h1>
          </div>
          <div class="Landing-Right">
            <div class="Login-Box">
  
              <h1 id="Fancy-Title">Student Login</h1>
              <div>
                <h2>Username:</h2>
                <input value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
              </div>
              <div>
                <h2>Password:</h2>
                <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
              </div>
              <button onClick={()=>this.loginStudent()} id="big">
                  Login
                </button>
            </div>
  
          </div>
        </div>
      )
      }
    }
    
}

export default withRouter(UserLogin);
