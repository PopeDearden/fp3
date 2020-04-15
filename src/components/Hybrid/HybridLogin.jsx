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
          <div class="Split-Between2">
            <img id="Icon2" src="https://lh3.googleusercontent.com/FSJw-4kp3OzpqqfvlCwHai1eO604ZVDMP5nl2BsY3B_lX7WOGQItJQGnyliCFcXBfKZIpfhNh2aUYjLhqv39AVczFVOP2FedJf50WmWchF0ofKsHVhmhcFsA1JUx5vGICMnftmv4iMlBww88qZOqPQN0Ol-I5a1rZm4Uke8QVRqAv1VimOXzGGnT1hLMqfk5ertOe5kl-1gLiIYnhe8oXIk9iuc5GIIiviyAhIYcolapPcRH0V2zvH5ZW6EEvkiTQi7oMDP3MTXf4ZJiiTqsV3mbgY5GeUql1wHrr4La_M034iDD5Cj0deH7dwegK77t6Xu_jgDhDFkeCE83J6gapHpkYPppIETCputEV5zKCKBpKmxmCSaFE4-tSsffLbU7pqXiFhB_HoiMT5RGeyQlzWACQ_8fylVmFA7R-zTKH1S5-wHRIxBDG6_Q4yrJhwf8DzH0s111jAr5BK42LV-uJwwmirzOCOquMSj-8gEQMmtNtHJqIDoBozIQLratMoDm6Fd4EfhZ2oCIGGkLly_uuHt6_0jfFG0E280QzEFDp6ZF0BBftME3Y9YdVbr-zdbiND3ZmFUc4ZBGlrxRkxgQYmZYan7UdjEJK_8fk_x3JxlaXFi8YI5xQ7ZNHz8COPEcbHO4UR2ZPS4D52bYeWZhATigukM8V_7oRkVlfxR-eFwwic4Mo5w2JD2WT3kVvlgOl8H8ZjnrA0Oxt7TVCMBrOUWV7hq0qOejjJjuoaKcQxw8igNYk7_A7k0=s756-no" alt="Icon" />
            <h1 id="Main-Title">Fundraiser <br></br>Portal</h1>
            </div>
            {/* <h1 id="Sub-Title">A Good Always Product</h1> */}
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
