import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import swal from "sweetalert";



class CreateUser extends Component {
  constructor(s) {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      password: '',
      sample_light_black: 0,
      sample_light_yellow: 0,
      sample_puc_yellow: 0,
      sample_puc_black: 0,
    }
  }
  generatePassword = () => {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyz01234567891234567890",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    this.setState({
      password: retVal
    })
  }
  CreateUser = () => {
   if (this.state.first_name === '' || this.state.last_name === '' || this.state.password === '') 
   return(
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'First Name, Last Name Initial, and Password are required',
     })
   )
    
    console.log(this.state)
    axios.post('/api/director/create-user', this.state)
      .then(res => {
        console.log(res.data)
        if (res.data === 'Created Student Account') {
          Swal.fire('Successfully Created Student Account')
          this.setState({
            first_name: '',
            last_name: '',
            password: '',
            sample_light_black: 0,
            sample_light_yellow: 0,
            sample_puc_yellow: 0,
            sample_puc_black: 0,
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'There was an error',
            text: 'We were unable to create your student account',
          })
        }
      }

      )
  }

  render() {
    return (
      <div class="General-Page" >
        {/* <div class="page-bar-blue">
          <h2>Create Student Account</h2>
        </div> */}
        <div class="General-Content">
          <div class="Form-Box">
            <div class="Form-Box-Left">
              <h2>Create new<br></br> student account</h2>
              <br></br>
              <div class="Form-Split">
                <div>
                  <h3>First Name:</h3>
                  <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
                  <h3>Last Name Initial:</h3>
                  <input maxlength="1" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value.toUpperCase() })} />
                </div>
                <div>
                  <p>*Username will be: <br>
                  </br><br></br>
                    {this.state.first_name}{this.state.last_name}
                  </p>
                </div>
              </div>
              <div class="Form-Split">
                <div>
                  <h3>Password:</h3>
                  <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                  <div>
                    <button id="Small" onClick={() => this.generatePassword()}>Generate Password</button>

                  </div>
                </div>
                <p>
                  You can create a password for the student of your own, or you can automatically generate one.<br></br>
                </p>
              </div>
            </div>
            <div class="Form-Box-Right">
              <h2>Samples Given to the Student</h2>
              <br></br>
              <div class="Form-Split">
                <div>
                  <h3>FlashLights</h3>
                  <input type="number" min="0" value={this.state.sample_light_black} onChange={e => this.setState({ sample_light_black: +e.target.value })} />
                </div>
                <div>
                  <h3>Lanterns</h3>
                  <input type="number" min="0" value={this.state.sample_puc_yellow} onChange={e => this.setState({ sample_puc_yellow: +e.target.value })} />
                </div>
              </div>
              <br></br>
              <br></br>
              <button onClick={() => this.CreateUser()} id="medium">Create Student Account</button>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default CreateUser;
