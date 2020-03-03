import React, { Component } from "react";
import axios from "axios";



class CreateAdmin extends Component {
  constructor(s) {
    super()
    this.state = {
      first_name: 'Test',
      last_name: 'Hosking',
      email: 'fake@email.com',
      password: 'fake123',
      phone:'1234567899'
    }
  }
  
  createAdmin=()=>{
    alert('attempting')
    axios.post('/api/create-manager', this.state)
  }
  render(){
    return(
      <div className = "App" >
        <h1>Create Admin page</h1>
           <button onClick={()=>this.createAdmin()}>Fire</button>
      </div>
    )

  }
}

export default CreateAdmin;
