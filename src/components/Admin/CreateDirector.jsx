import React, { Component } from "react";
import axios from "axios";



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
    }
  }

  createDirector = () => {
    alert('attempting')
    axios.post('/api/create-director', this.state)
  }
  render() {
    return (
      <div className="App" >
        <h1 id="Fancy-Title">Create Director</h1>
        <div>
          <h2>First Name</h2>
          <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
        </div>
        <div>
          <h2>last_name</h2>
          <input value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} />
        </div>
        <div>
          <h2>Email:</h2>
          <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
        </div>
        <div>
          <h2>Phone</h2>
          <input value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
        </div>
        <div>
          <h2>School Name</h2>
          <input value={this.state.school_name} onChange={e => this.setState({ school_name: e.target.value })} />
        </div>
        <div>
          <h2>School Street</h2>
          <input value={this.state.school_street} onChange={e => this.setState({ school_street: e.target.value })} />
        </div>
        <div>
          <h2>School City</h2>
          <input value={this.state.school_city} onChange={e => this.setState({ school_city: e.target.value })} />
        </div>
        <div>
          <h2>School State</h2>
          <input value={this.state.school_state} onChange={e => this.setState({ school_state: e.target.value })} />
        </div>
        <div>
          <h2>School Zip</h2>
          <input value={this.state.school_zip} onChange={e => this.setState({ school_zip: e.target.value })} />
        </div>
        <div>
          <h2>Director's TAG</h2>
          <input value={this.state.tag} onChange={e => this.setState({ tag: e.target.value })} />
        </div>
        <div>
          <h2>Password</h2>
          <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
        </div>
          <button onClick={() => this.createDirector()} id="big">
            Create Director</button>
        </div>
        )
    
      }
    }
    
    export default CreateDirector;
