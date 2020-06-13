import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
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
            collected: false,
            confirmed: false,
            order_placed: false,
            order_sent: false,
            flashlight_yellow: 0,
            puc_black: 0,
            good_flash: 0,
            good_puc: 0,
        }
    }
    createOrder = async () =>  {
        if (this.state.first_name_cust === '' || this.state.last_name_cust === '' || this.state.address_cust === '')
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'First Name, Last Name, and Address are required',
                })
            )

        console.log(this.state)
        axios.post('/api/user/create-order', this.state)
            .then(res => {
                console.log(res.data)
                if (res.data === 'Created Order') {
                    Swal.fire('Created Order')
                    this.setState({
                        first_name_cust: '',
                        last_name_cust: '',
                        phone_cust: '',
                        email_cust: '',
                        address_cust: '',
                        flashlights: 0,
                        pucs: 0,
                        flashlight_yellow: 0,
                        puc_black: 0,
                        good_flash: 0,
                        good_puc: 0,
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
        function Icon(collected) {
            const collectedIcon = <i id="IsCollected" class="fas fa-check-circle">Marked as: money collected</i>
            const notCollectedIcon = <i id="NotCollected" class="fas fa-exclamation-circle">Marked as: money not Collected</i>
            if (collected === false || collected === "false") {
                return notCollectedIcon
            }
            else if (collected === true || collected === "true")
                return collectedIcon
        }
        return (
            <div class="General-Page" >
                {/* <div class="page-bar-blue">
          <h2>Create Student Account</h2>
        </div> */}
                <div class="General-Content">
                <div class="Title-Bar">
               <h2> <i class="fas fa-user-plus"></i>   Create New Order</h2>
                    </div>
                    <div class="Form-Box">
                        <div class="Form-Box-Left">
                            <h2>Customer Information {Icon(this.state.collected)}</h2>
                            <br></br>
                            <div class="Form-Split">
                                <div>
                                    <h3>First Name</h3>
                                    <input value={this.state.first_name_cust} onChange={e => this.setState({ first_name_cust: e.target.value })} />
                                    <h3>Last Name</h3>
                                    <input value={this.state.last_name_cust} onChange={e => this.setState({ last_name_cust: e.target.value })} />
                                    <h3>Phone</h3>
                                    <input value={this.state.phone_cust} onChange={e => this.setState({ phone_cust: e.target.value })} />
                                </div>
                                <div>
                                    <p>Customer's must provide their first and last name, in addition to their address for this order to be valid.</p>
                                </div>
                            </div>
                            <h3>Email</h3>
                            <input value={this.state.email_cust} onChange={e => this.setState({ email_cust: e.target.value })} />
                            <h3>Home Address</h3>
                            <input value={this.state.address_cust} onChange={e => this.setState({ address_cust: e.target.value })} />
                        </div>
                        <div class="Form-Box-Right">
                            <h2>How many solar flashlights<br></br> and/or lanterns did they order?</h2>
                            <br></br>
                            <div class="Form-Split">
                                <div>
                                    <h3>Black FlashLights ($30)</h3>
                                    <input type="number" min="0"  value={+this.state.flashlights} onChange={e => this.setState({ flashlights: +e.target.value })} />
                                </div>
                                <div>
                                    <h3>Yellow FlashLights ($30)</h3>
                                    <input type="number" min="0"  value={+this.state.flashlight_yellow} onChange={e => this.setState({ flashlight_yellow: +e.target.value })} />
                                </div>
                                <div>
                                    <h3>Lanterns ($35)</h3>
                                    <input type="number" min="0"   value={+this.state.pucs} onChange={e => this.setState({ pucs: +e.target.value })} />
                                </div>
                            </div>
                            <div class="Form-Split">
                                {/* <div>
                                    <h3>Black Lantern ($35)</h3>
                                    <input type="number" min="0" value={this.state.puc_black} onChange={e => this.setState({ puc_black: +e.target.value })} />
                                </div> */}
                                {/* <div>
                                    <h3>Good Always Flashlight ($30)</h3>
                                    <input type="number" min="0" value={this.state.good_flash} onChange={e => this.setState({ good_flash: +e.target.value })} />
                                </div>
                                <div>
                                    <h3>Good Always Lantern ($35)</h3>
                                    <input type="number" min="0" value={this.state.good_puc} onChange={e => this.setState({ good_puc: +e.target.value })} />
                                </div> */}
                            </div>
                            <h2>Have you collected their <br></br> payment of ${this.state.flashlights*30+this.state.flashlight_yellow*30+this.state.pucs*35+this.state.puc_black*35+this.state.good_flash*30+this.state.good_puc*35}?</h2>
                            <select id="Drop" onChange={e => this.setState({collected: e.target.value})}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                            <br></br>
                            <br></br>
                            <button onClick={() => this.createOrder()} id="medium">Create Order</button>
                        </div>
                    </div>
                    <div className="Footer"></div>
                </div>
            </div>
        )

    }
}

export default CreateOrder;
