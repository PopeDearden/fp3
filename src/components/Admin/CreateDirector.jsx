import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'


class CreateDirector extends Component {
  constructor(s) {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      school_name: '',
      school_street: '',
      school_city: '',
      school_state: '',
      school_zip: '',
      tag: '',
      stage: 'registered',
      password: '',
      black_flash_sample: 0,
      yellow_flash_sample: 0,
      yellow_puc_sample: 0,
      black_puc_sample: 0,
      sample_processed: false,
    }
  }

  createDirector = () => {
    axios.post('/api/create-director', this.state)
    .then(res => {
      console.log(res.data)
      if (res.data === 'Created Director') {
          Swal.fire('Created Director')
          this.setState({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            school_name: '',
            school_street: '',
            school_city: '',
            school_state: '',
            school_zip: '',
            tag: '',
            stage: 'registered',
            password: '',
            black_flash_sample: 0,
            yellow_flash_sample: 0,
            yellow_puc_sample: 0,
            black_puc_sample: 0,
            sample_processed: false,
          })
      }
      else {
          Swal.fire({
              icon: 'error',
              title: 'There was an error',
              text: 'We were unable to create the director account.',
          })
      }
  }

  )
  }
  render() {
    return (
      <div className="General-Page" >
        <div class="General-Content">
          <div class="Title-Bar">
            <h2> Create a new School / Director</h2>
          </div>
          <div class="Form-Box">
            <div class="Form-Box-Left">
              <h2>Director Info</h2>
              <br></br>
              <h3>First Name</h3>
              <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
              <h3>Last Name</h3>
              <input value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} />
              <h3>Email:</h3>
              <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
              <h3>Phone | please format:</h3>
              <h3>(xxx) xxx-xxxx</h3>
              <input value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
            </div>
            <div class="Form-Box-Right">
              <h2>School Info</h2>
              <br></br>
              <h3>School Name</h3>
              <input value={this.state.school_name} onChange={e => this.setState({ school_name: e.target.value })} />
              <h3>School Street</h3>
              <input value={this.state.school_street} onChange={e => this.setState({ school_street: e.target.value })} />
              <h3>School City</h3>
              <input value={this.state.school_city} onChange={e => this.setState({ school_city: e.target.value })} />
              <h3>School State</h3>
              <input value={this.state.school_state} onChange={e => this.setState({ school_state: e.target.value })} />
              <h3>School Zip</h3>
              <input value={this.state.school_zip} onChange={e => this.setState({ school_zip: e.target.value })} />
            </div>
            <div class="Form-Box-Right">
              <h2>Data Tagging and password</h2>
              <br></br>
              <h3 id="bold">Director's tag will be used for directors to login.</h3>
              <h3 id="bad">This tag will be permanent and cannot be changed. Do not use spaces. Make sure there are no spaces after the tag too!</h3>
              <h3>Director's TAG</h3>
              <input value={this.state.tag} onChange={e => this.setState({ tag: e.target.value })} />
              <h3>Password</h3>
              <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            </div>
            <div class="Form-Box-Right">
              <h2>Samples To Be Delivered</h2>
              <br></br>
              <div class="Form-Split">
                <div>
                  <h3>Black Flashlights</h3>
                  <input value={this.state.black_flash_sample} onChange={e => this.setState({ black_flash_sample: e.target.value })} />
                </div>
                <div>
                  <h3>Yellow Flashlights</h3>
                  <input value={this.state.yellow_flash_sample} onChange={e => this.setState({ yellow_flash_sample: e.target.value })} />
                </div>
              </div>
              <div class="Form-Split">
                <div>
                  <h3>Yellow Lanterns</h3>
                  <input value={this.state.yellow_puc_sample} onChange={e => this.setState({ yellow_puc_sample: e.target.value })} />
                </div>
                <div>

                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <button onClick={() => this.createDirector()} id="medium">
                Create Director</button>

            </div>
          </div>






          <div>
          </div>
        </div>

      </div >
    )

  }
}

export default CreateDirector;
