import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import swal from "sweetalert";
import moment from 'moment'


class CreateOrder extends Component {
  constructor(s) {
    super()
    this.state = {
      first_name_cust: '',
      last_name_cust: '',
      phone_cust: '',
      email_cust: '',
      address_cust: '',
      flashlights: 0,
      pucs: 0,
    }
  }
  CreateOrder = () => {
   if (this.state.first_name_cust === '' || this.state.last_name_cust === ''|| this.state.address_cust === '') 
   return(
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'First Name, Last Name, and Address are required',
     })
   )
    
    console.log(this.state)
    axios.post('/api/director/create-order', this.state)
      .then(res => {
        console.log(res.data)
        if (res.data === 'Created Student Account') {
          Swal.fire('Successfully Created Order')
          this.setState({
            first_name_cust: '',
            last_name_cust: '',
            phone_cust: '',
            email_cust: '',
            address_cust: '',
            flashlights: '',
            pucs: '',
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'There was an error',
            text: 'We were unable to create your order',
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
              <h2>--Create new order--
                  <br></br>
                  <br>
                  </br>Customer Information</h2>
                  <br></br>
              <div class="Form-Split">
                <div>
                  <h3>First Name</h3>
                  <input value={this.state.first_name_cust} onChange={e => this.setState({ first_name_cust: e.target.value })} />
                  <h3>Last Name</h3>
                  <input value={this.state.last_name_cust} onChange={e =>this.setState({last_name_cust: e.target.value})} />
                  <h3>Phone</h3>
                  <input value={this.state.phone_cust} onChange={e =>this.setState({phone_cust: e.target.value})} />
                </div>
                <div>
                  <p>Customer's must provide their first and last name, in addition to their address for this order to be valid.</p>
                </div>
              </div>
                  <h3>Email</h3>
                  <input value={this.state.email_cust} onChange={e =>this.setState({email_cust: e.target.value})} />
                  <h3>Home Addresss</h3>
                  <input value={this.state.address_cust} onChange={e => this.setState({ address_cust: e.target.value })} />
            </div>
            <div class="Form-Box-Right">
              <h2>How many solar flashlights<br></br> and/or lanterns did they order?</h2>
              <br></br>
              <div class="Form-Split">
                <div>
                  <h3>FlashLights</h3>
                  <input type="number" min="0" value={this.state.flashlights} onChange={e => this.setState({ flashlights: +e.target.value })} />
                </div>
                <div>
                  <h3>Lanterns</h3>
                  <input type="number" min="0" value={this.state.pucs} onChange={e => this.setState({ pucs: +e.target.value })} />
                </div>
              </div>
              <br></br>
              <br></br>
              <button onClick={() => console.log(this.state)} id="medium">Create Student Account</button>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default CreateOrder;
