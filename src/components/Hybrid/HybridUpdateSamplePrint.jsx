import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import Moment from 'react-moment'




class UpdateSample extends Component {
    constructor(s) {
        super()
        this.state = {
            order: [],
            history: [],
        }
    }
    componentDidMount () {
        this.getInfo()
    }
    getInfo = async () => {
        await axios.put(`/api/hybrid/get-one-sample/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    order: res.data.order[0],
                    history: res.data.history
                })
            })
            window.print()
    }

    render() {
        const { order } = this.state
        return (
            <div className="App" >
                <div class="Best-Print">
                    <div className="Split">
                        <div>
                            <h2>Requested samples for <b>{order.school_name}</b>
                            </h2>
                            <button  onClick={() => this.props.history.push('/hybridlight/samples-request')} id="GeneratePrint">Go Back</button>
                            <br></br>
                            <div className="Split">
                                <div>
                                    <p>{order.first_name} {order.last_name}</p>
                                    <p>{order.school_street}</p>
                                    <p>{order.school_city}, {order.school_state}  {order.school_zip}</p>
                                    <br></br>
                                    <p>{order.phone}</p>
                                    <p>{order.email}</p>
                                </div>
                            </div>
                            <h3>Sample Request History</h3>
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Black <br></br>Flashlights</th>
                                    <th>Yellow<br></br> Flashlights</th>
                                    <th>Yellow<br></br> Lanterns</th>
                                    <th>Comment</th>
                                </tr>
                                {this.state.history.map(history => (
                                    <tr>
                                        <td><Moment format="MM/DD/YYYY">{history.date}</Moment></td>
                                        <td>{history.black_flashlights}</td>
                                        <td>{history.yellow_flashlights}</td>
                                        <td>{history.yellow_pucs}</td>
                                        <td>{history.comment}</td>
                                    </tr>
                                ))}
                            </table>
                            <h3>Total Samples Ordered</h3>
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
                                            ${(order.black_flash_sample * 15).toFixed(2)}
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
                                            ${(order.yellow_flash_sample * 15).toFixed(2)}
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
                                            ${(order.yellow_puc_sample * (35 / 2)).toFixed(2)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Grand Total</td>
                                        <td>${((order.yellow_puc_sample * (35 / 2)) + (order.yellow_flash_sample * 15) + (order.black_flash_sample * 15)).toFixed(2)}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    <br></br>
                </div>
            </div>
        )

    }
}

export default UpdateSample;
