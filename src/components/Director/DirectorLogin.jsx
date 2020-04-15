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

    await axios.put('/api/director', this.state)
      .then(res => {
        if (res.data[0] === undefined) {
          return (
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Wrong Login Information!',
              footer: 'Make sure your email and password are correct'
            })
          )
        } else {
          return (
            this.checkDirector()
          )
        }

      })
  }


  render() {
    if (this.state.approved === true) {
      return (
        <div>
          <div class="Admin-Page">
            <DirectorHeader
              first_name={this.state.first_name}
              last_name={this.state.last_name} />
            <div class="Helper">
              {DirectorRoutes}
            </div>
          </div>
        </div>
      )
    } else {

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
