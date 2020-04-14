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
              <img id="Icon2" src="https://lh3.googleusercontent.com/xNMBgF0KojU7K9wRVZb4oGCBDjcGCLgT8pzCYsp_CWTIMQpW8-1zH0aMrnB2ul2mplP7ZCKQs6eVKa4lkpbfF6_c9osB41LLvBwxLcC5joT-WIqwyMpEhYbabBTRo0CS9XB6alxRYLefdKkP_Owyula2_zPpUwFtSahi82d_VLx57xrHvgwq7ze62NuoA4P_YB6AfBl7gkPEam13IAYxgeeivp1uUCIwAm3ExllHuzu1feXOQTKnJ-GfdgVLTnQytSDoIwAibEjOJElGSenXE8mcKt1drnidn5WjJIPR4fPJ-or63pqdClutfWkNNb7oS12OJBh_9vqW9DHGpFQ2p6xS0YJHAX6aIzSWYvUW38e0GelmB73RG_fnyZgReC8oZoDtR_t9zwlwY9ltQuW1BoDFVGlm1HdGrqV-9XEjAFExOOKUaWbmPbjssg6LiJBJShdkw63FocH7PD2IUoAfX_klMWuYBxdVDJ0IsJT3T-vg8rV11yg4xuK_xY9Tj6qRQkrxFJjhXMSD2j6gNV4mpFuhm-37dzGJaYgNZeTYnColxzthIc2aTVbN1Eo9gB-KKOx9L_kJSSA-nCD0VYxQ-9npb-Qzqvst8aOAXBH81jPnsG_pz0jn1qfqDRJ9wk9zXXGcTWvXVx3Ku3iidH22JTxhnOsgvX2tuzjVsxglBf4711svTWU_5DBsloyXOrAXxNG8ag5EFTetyGsfuxSD58b9a_Sb0sqAM05rBNS6q9o_zmDSW1WY4L4=s756-no" alt="Icon" />
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
