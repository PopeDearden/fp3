import React, { Component } from "react";
import axios from "axios";




class CreateUser extends Component {
  constructor(s) {
    super()
    this.state = {
      fisrt_name: '',
      last_name: '',
      director_tag: '',
      password: '',
      sample_light_black: 0,
      sample_light_yellow: 0,
      sample_puc_yellow: 0,
      sample_puc_black: 0

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
              <h3>First Name:</h3>
              <input value={this.state.fisrt_name} onChange={e => this.setState({ fisrt_name: e.target.value })} />
              <h3>Last Name Initial:</h3>
              <input maxlength="1" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} />
              <button id="Small" onClick={() => this.generatePassword()}>Generate Password</button>
              <h3>Password:</h3>
              <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            </div>
            <div class="Form-Box-Right">
              <h2>Samples Given to the Student</h2>
              <br></br>
              <div class="Form-Split">
                <div>
                  <h3>FlashLights</h3>
                  <input type="number" value={this.state.sample_light_black} onChange={e => this.setState({ sample_light_black: e.target.value })} />
                </div>
                <div>
                  <h3>Lanterns</h3>
                  <input type="number" value={this.state.sample_light_yellow} onChange={e => this.setState({ sample_light_yellow: e.target.value })} />
                </div>
              </div>
              <br></br>
              <br></br>
              <button id="medium">Create Student Account</button>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default CreateUser;
