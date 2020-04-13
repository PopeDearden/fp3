import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'



class HybridFinalUpdate extends Component {
    constructor(s) {
        super()
        this.state = {
            order: [],
            url: '',
        }
    }

    componentDidMount() {
        this.getOrder()
    }

    getOrder = async () => {
        await axios.put(`/api/final/${this.props.match.params.id}`).then(res => {
            this.setState({
                order: res.data[0]
            })
        })
    }

    updateFinal = () => {
        Swal.fire({
            html: `<h2>To mark this order as fulfilled, paste a url to your invoice document, this will replace the previous invoice link for the samples:</h2>`,
            input: 'url',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Mark as fulfilled',
            inputValidator: async (value) => {
                this.setState({
                    url: value,
                })
                if (!value) {
                    return 'You need to add a link to your invoice!'
                }
                else {
                   await this.setState({
                        url: value
                    })
                   await axios.put(`/api/final/update/${this.props.match.params.id}`, [this.state.url]).then(res => {
                        Swal.fire('The order was updated and marked as fulfilled.')
                        this.props.history.push('/hybridlight/invoice/history')
                    })

                }
            }

        })
    }


    // order_sent_id: 7
    // yellow_pucs: 47
    // black_pucs: 0
    // yellow_flashlights: 31
    // black_flashlights: 22
    // director_tag: "test1"
    // date: "2020-03-17T04:35:59.208Z"
    // fulfilled: false
    // director_id: 5
    // first_name: "Test "
    // last_name: "Round 1"
    // email: "test1"
    // phone: "0"
    // school_name: "0"
    // school_street: "0"
    // school_city: "0"
    // school_state: "0"
    // school_zip: "0"
    // tag: "test1"
    // stage: "order sent"
    // password: "test123"
    // black_flash_sample: 10
    // yellow_flash_sample: 10
    // yellow_puc_sample: 10
    // black_puc_sample: 0
    // sample_processed: true

    render() {
        const { order } = this.state
        return (
            <div className="App" >

                <div class="Best-Print">
                    <div class="Form-Split">
                    <div class="Print-Split">
                        <div>
                            <h2>Final order for <b> {order.school_name}</b> </h2>
                            <br></br>
                            <p>{order.first_name} {order.last_name}</p>
                            <p>{order.school_street}</p>
                            <p>{order.school_city}, {order.school_state}</p>
                            <br></br>
                            <p>{order.phone}</p>
                            <p>{order.email}</p>
                        </div>
                        {/* <button  onClick={() => window.print()} id="GeneratePrint">Print</button> */}
                    </div>
              
                    </div>


                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Samples Given</th>
                                <th>New Order</th>
                                <th>Product Total</th>
                                <th>School's Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Black Flashlight</td>
                            <td>{order.black_flash_sample}</td>
                            <td>{order.black_flashlights}</td>
                            <td id="bold">{order.black_flash_sample + order.black_flashlights}</td>
                            <td>$15.00</td>
                            <td id="bold">${(order.black_flash_sample * 15 + order.black_flashlights * 15).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Yellow Flashlight</td>
                            <td>{order.yellow_flash_sample}</td>
                            <td>{order.yellow_flashlights}</td>
                            <td id="bold">{order.yellow_flash_sample + order.yellow_flashlights}</td>
                            <td>$15.00</td>
                            <td id="bold">${(order.yellow_flash_sample * 15 + order.yellow_flashlights * 15).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Yellow Lanterns</td>
                            <td>{order.yellow_puc_sample}</td>
                            <td>{order.yellow_pucs}</td>
                            <td id="bold">{order.yellow_puc_sample + order.yellow_pucs}</td>
                            <td>$17.50</td>
                            <td id="bold">${((order.yellow_puc_sample + order.yellow_pucs) * (35 / 2)).toFixed(2)}</td>
                        </tr>
                        <tr>

                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>GRAND TOTAL</th>
                            <th id="bold">${(((order.yellow_puc_sample + order.yellow_pucs) * (35 / 2)) + (order.yellow_flash_sample * 15 + order.yellow_flashlights * 15) + (order.black_flash_sample * 15 + order.black_flashlights * 15)).toFixed(2)}</th>
                        </tr>
                    </table>
                    <br></br>
              
                        <button id="medium" onClick={() => this.updateFinal()}>Mark as fulfilled</button>
                
                </div>
            </div>
        )

    }
}

export default HybridFinalUpdate;
