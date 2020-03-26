import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'


class UpdateDirector extends Component {
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
      password: '',
      black_flash_sample: 0,
      yellow_flash_sample: 0,
      yellow_puc_sample: 0,
      black_puc_sample: 0,
      sample_processed: false,
    }
  }
  componentDidMount () {
    console.log(this.props.match.params.id)
    axios.put(`/api/admin/get-director/${this.props.match.params.id}`).then(res => {
      const info = res.data[0]
      this.setState({
        first_name: info.first_name,
        last_name: info.last_name,
        email: info.email,
        phone: info.phone,
        school_name: info.school_name,
        school_street: info.school_street,
        school_city: info.school_city,
        school_state: info.school_state,
        school_zip: info.school_zip,
        tag: info.tag,
        password: info.password,
        black_flash_sample: info.black_flash_sample,
        yellow_flash_sample: info.yellow_flash_sample,
        yellow_puc_sample: info.yellow_puc_sample,
        black_puc_sample: info.black_puc_sample,
        sample_processed: info.sample_processed
      })
    })
  }

  getInfo = () => {
    axios.put(`/api/admin/get-director/${this.props.match.params.id}`).then(res => {
      const info = res.data[0]
      this.setState({
        first_name: info.first_name,
        last_name: info.last_name,
        email: info.email,
        phone: info.phone,
        school_name: info.school_name,
        school_street: info.school_street,
        school_city: info.school_city,
        school_state: info.school_state,
        school_zip: info.school_zip,
        tag: info.tag,
        password: info.password,
        black_flash_sample: info.black_flash_sample,
        yellow_flash_sample: info.yellow_flash_sample,
        yellow_puc_sample: info.yellow_puc_sample,
        black_puc_sample: info.black_puc_sample,
        sample_processed: info.sample_processed
      })
    })
  }
  processed = () => { if (this.state.sample_processed === true) {
    return(
      <div class="Form-Box-Right">
            <h2 id="warning">Samples have been marked<br></br> as "fulfilled" by Hybridlight<br></br>
           You cannot edit these numbers anymore!</h2>
            <br></br>
            <div class="Form-Split">
              <div>
                <h3>Black Flashlights</h3>
                <input value={this.state.black_flash_sample}  />
              </div>
              <div>
                <h3>Yellow Flashlights</h3>
                <input value={this.state.yellow_flash_sample}  />
              </div>
            </div>
            <div class="Form-Split">
              <div>
                <h3>Yellow Lanterns</h3>
                <input value={this.state.yellow_puc_sample} />
              </div>
              <div>

              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => this.updateDirector()} id="medium">
              Update Director</button>

          </div>
    )
  } else {
    return(
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
      <button onClick={() => this.updateDirector()} id="medium">
        Update Director</button>

    </div>
    )
  }
  }

  updateDirector = async () => {
    await axios.put(`/api/admin/update-director/${this.props.match.params.id}`, this.state)
    .then(res => {
      console.log(res.data)
      if (res.data === 'Updated Director') {
          Swal.fire({
            icon: 'success',
            title: 'The Director Account Was Updated',
            showConfirmButton: false,
            timer: 2000
          })
          this.getInfo()
      }
      else {
          Swal.fire({
              icon: 'error',
              title: 'There was an error',
              text: 'We were unable to update the director account.',
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
              <h3>(Director's Email will be used for login)</h3>
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
              <h3 id="warning">Tag cannot be changed!</h3>
              <h3>Director's TAG</h3>
              <input value={this.state.tag} />
              <h3>Password</h3>
              <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            </div>
            {this.processed()}
          </div>






          <div>
          </div>
        </div>

      </div >
    )

  }
}

export default UpdateDirector;
