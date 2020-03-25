import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import swal from "sweetalert";




class UpdateSample extends Component {
    constructor(s) {
        super()
        this.state = {
            order: []
        }
    }
    componentDidMount() {
        this.getInfo()
    }
    getInfo = () => {
        axios.put(`/api/hybrid/get-one-sample/${this.props.match.params.id}`)
        .then(res => {
            console.log(res.data)
                this.setState({
                    order: res.data[0]
                })
            })
    }
    fulfill = () => {
        Swal.fire({
            html: `<h2>To mark this order as fulfilled, paste a url to your invoice document:</h2>`,
            input: 'url',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Mark as fulfilled',
            inputValidator: async (value)  => {
                if (!value) {
                  return 'You need to add a link to your invoice!'
                }
                else{
                   await this.setState({
                        url: value
                    })
                   await axios.put(`/api/hybrid/invoice`, [this.state.url, this.state.order.tag]).then(res => {
                        Swal.fire('The order was updated and marked as fulfilled.')
                        this.props.history.push('/hybridlight/invoice/history')
                    })

                }
              }
        
        })
    }

    render() {
        const { order } = this.state
        return (
            <div className="App" >
                <div class="Best-Print">
                    <h2>Requested samples for <b>{order.school_name}</b><button  onClick={() => window.print()} id="GeneratePrint">Print</button></h2>
                    <br></br>
                    <p>{order.first_name} {order.last_name}</p>
                    <p>{order.school_street}</p>
                    <p>{order.school_city}, {order.school_state}  {order.school_zip}</p>
                    <br></br>
                    <p>{order.phone}</p>
                    <p>{order.email}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Product
                        </th>
                                <th>
                                    Quantity
                        </th>
                                <th>
                                    School's Price
                        </th>
                                <th>
                                    Total
                        </th>
                            </tr>
                            <tr>
                                <td>
                                    Black Flashlight
                        </td>
                                <td>
                                    {order.black_flash_sample}
                                </td>
                                <td>
                                    $15.00
                        </td>
                                <td>
                                    ${(order.black_flash_sample*15).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Yellow Flashlight
                        </td>
                                <td>
                                    {order.yellow_flash_sample}
                                </td>
                                <td>
                                    $15.00
                        </td>
                                <td>
                                    ${(order.yellow_flash_sample*15).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Yellow Lantern
                        </td>
                                <td>
                                    {order.yellow_puc_sample}
                                </td>
                                <td>
                                    $17.50
                        </td>
                                <td>
                                    ${(order.yellow_puc_sample*(35/2)).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Grand Total</td>
                                <td>${((order.yellow_puc_sample*(35/2)) + (order.yellow_flash_sample*15) + (order.black_flash_sample*15)).toFixed(2)}</td>
                            </tr>
                        </thead>
                    </table>
                    <br></br>
                    <button onClick={()=>this.fulfill()} id="medium">Mark As Fulfilled</button>
                </div>
            </div>
        )

    }
}

export default UpdateSample;
