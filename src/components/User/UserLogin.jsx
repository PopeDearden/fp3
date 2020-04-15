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
  loginStudent = async () => {
    // console.log(this.state)
    await axios.put('/api/student', this.state)
      .then(res => {
        console.log(res.data[0])
        if (res.data[0] === undefined) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Login Information!',
            footer: 'Make sure your username and password are correct'
          })
        }
        console.log(res.data)
      })
      await  this.checkStudent()
  }
  render() {
    if (this.state.approved === true) {
      return (
        <div class="Admin-Page">
          <UserHeader
            username = {this.state.username} 
            tag = {this.state.tag}/>
            <div class="Helper">
          {UserRoutes}
            </div>

        </div>
      )
    }
    else{
      return (
  
        <div class="Landing-Page">
          <div class="Landing-Left">
          <div class="Split-Between2">
              <img id="Icon2" src="https://lh3.googleusercontent.com/eZWsUwxzAsEEEpahbJ9NLwEIW844JpFnh7x4jSqLfOo9jfCLuMqdDddDrcokS-psiXcWXfVfIOXs7uRmrW_RhXR-XLVyvSm-kSr8XulfI-uSGva1a1uTzhdaHAI2DQ_SlrAhxG4GVqF4snzo43Rn_SdZtmAt2hJfTSI8tbN9Fs-4arY9KHmSnw3NfmVlwj_0yTPAcMUQQ2LGGndE8bqYVCYa_sI6awcMZUK00xTW9bs95bE3vGu2zDPja4RjPYXTAE8TyFL9iuSOE5ljKZgo505aiILgXt4ipEIS1efHKFrQTdIFtDnRYMn1CjkqAKcjCgewSmpqXV7p6QLXYSQlGFE7wQ9YgUo3ge2uApeYcgbLI5dSVoY2Z9HmRe3XHv8G_N_0wk9QT-lie80lbMR_asQfM9Me3uNs-wuAofdGJAs2hLlCiMRoqprq9KDU_Cjp0i3NaTsbZE6MrMeAfiRhjIio4pFA4ILd52PSoFINVSAwpnBXS2rbR8gOkAVPSaz3Mb3dQJIWTmpH5Qf-coAEAXN5Wok7P5wWpnDAe2M-PPCO2vB3SogVaA8xa-5B4ps2DombyEZOGlJMonNKjeQ5-lo6Xg4AUXHObp_LKV7wBedf8UbgNQNrjooeD5hLp8tNFSF94qrAkVLSlQikmNVCeX9SPbwetCXddu2A8ehHv2f9mPaM0Sd2NFT1f30mnQK8Z9SiE5tg6qGs4rNSJUefRu4WTWD5wjdpXsSfEpAs_z8f8sZWw_6dQSU=w760-h761-no" alt="Icon" />
              <h1 id="Main-Title">Fundraiser <br></br>Portal</h1>
            </div>
            {/* <h1 id="Sub-Title">A Good Always Product</h1> */}
          </div>
          <div class="Landing-Right">
            <div class="Login-Box">
  
              <h1 id="Fancy-Title">Student Login</h1>
              <div class="GradientLine"></div>
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
