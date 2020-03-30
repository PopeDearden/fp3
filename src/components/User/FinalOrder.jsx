import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment'



class FinalOrder extends Component {
  constructor(s) {
    super()
    this.state = {
      orders: [],
      student: {},
      total: []
    }
  }
  async componentDidMount() {
    await axios.get('/api/student/confirmed').then(res => {
      console.log(res.data)
      this.setState({
        orders: res.data[0],
        total: res.data[1]
      })
    })
    console.log(this.state.total)
    await axios.get('/api/check-student').then(res => {
      console.log(res.data[0])
      this.setState({
        student: res.data[0]
      })
    })
  }
  render() {
    return (
      <div className="App" >
        <div className="GeneratePrint">
          <div className="Printing">
            <h1>Confirmed Orders for {this.state.student.username}</h1>
          </div>
          <div className="Printing2">
            <button id="GeneratePrint" onClick={() => window.print()}>Generate PDF to print or save</button>
            <div className="Best-Print2">
              <table>
                <thead>
                  <tr>
                    <th>
                      Product
                    </th>
                    <th>
                      Ordered
                    </th>
                    <th>
                      Customer Price
                    </th>
                    <th>
                      Collected Money
                    </th>
                    <th>
                      Your Earnings
                    </th>
                    <th>
                      Samples
                    </th>
                    <th>
                      Sample Cost
                    </th>
                    <th>Final Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Black Flashlights</td>
                    <td>{this.state.total.blackflash}</td>
                    <td>$30.00</td>
                    <td>${(this.state.total.blackflash * 30).toFixed(2)}</td>
                    <td>${(this.state.total.blackflash * 15).toFixed(2)}</td>
                    <td>{this.state.student.sample_light_black}</td>
                    <td>${(this.state.student.sample_light_black * 15).toFixed(2)}</td>
                    <td>${((this.state.total.blackflash * 15) - (this.state.student.sample_light_black * 15)).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Yellow Flashlights</td>
                    <td>{this.state.total.yellowflash}</td>
                    <td>$30.00</td>
                    <td>${(this.state.total.yellowflash * 30).toFixed(2)}</td>
                    <td>${(this.state.total.yellowflash * 15).toFixed(2)}</td>
                    <td>{this.state.student.sample_light_yellow}</td>
                    <td>${(this.state.student.sample_light_yellow * 15).toFixed(2)}</td>
                    <td>${((this.state.total.yellowflash * 15) - (this.state.student.sample_light_yellow * 15)).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Yellow Lanterns</td>
                    <td>{this.state.total.yellowpuc}</td>
                    <td>$35.00</td>
                    <td>${(this.state.total.yellowpuc * 35).toFixed(2)}</td>
                    <td>${(this.state.total.yellowpuc * (35 / 2)).toFixed(2)}</td>
                    <td>{+this.state.student.sample_puc_yellow}</td>
                    <td>${(this.state.student.sample_puc_yellow * (35 / 2)).toFixed(2)}</td>
                    <td>${((this.state.total.yellowpuc * (35 / 2)) - (this.state.student.sample_puc_yellow * (35 / 2))).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Collected Total</td>
                    <td>${((this.state.total.yellowflash * 30)+(this.state.total.blackflash * 30)+(this.state.total.yellowpuc * 35)).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                    <td id="bold">Earnings TOTAL</td>
                    <td id="bold">${((((this.state.total.yellowpuc * (35 / 2)) - (this.state.student.sample_puc_yellow * (35 / 2)))) + (((this.state.total.yellowflash * 15) - (this.state.student.sample_light_yellow * 15))) + (((this.state.total.blackflash * 15) - (this.state.student.sample_light_black * 15)))).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {this.state.orders.map(orders => (
              <div className="OneOrder2">
                <div class="Box1">
                  <p>{orders.first_name_cust} {orders.last_name_cust}</p>
                  <p><br></br></p>
                  <p>{orders.address_cust}</p>
                  <p>Phone: {orders.phone_cust}</p>
                  <p>Email: {orders.email_cust}</p>
                </div>
                <div class="Box2">
                  <p>Date Order created</p>
                  <p><Moment format="MM/DD/YYYY">{orders.date}</Moment></p>
                </div>
                <div class="Box3">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tr>
                      <td>Black Flashlights</td>
                      <td>{orders.flashlights}</td>
                      <td>$30.00</td>
                      <td>${30 * +orders.flashlights}.00</td>
                    </tr>
                    <tr>
                      <td>Yellow Flashlights</td>
                      <td>{orders.flashlight_yellow}</td>
                      <td>$30.00</td>
                      <td>${30 * +orders.flashlight_yellow}.00</td>
                    </tr>
                    <tr>
                      <td>Yellow Lanterns</td>
                      <td>{orders.pucs}</td>
                      <td>$35.00</td>
                      <td>${35 * +orders.pucs}.00</td>
                    </tr>
                    {/* <tr>
                          <td>Black Lanterns</td>
                          <td>{orders.pucs}</td>
                          <td>$35.00</td>
                          <td>${35*+orders.puc_black}.00</td>
                        </tr> */}
                    <tr>
                      <td>Totals</td>
                      <td></td>
                      <td></td>
                      <td id="bold">{'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35) + '.00'}</td>
                    </tr>
                  </table>
                  {/* <p>Black Flashlights: {orders.flashlights}</p>
                      <p>Yellow Flashlights: {orders.flashlight_yellow}</p>
                      <p>Yellow Lanterns: {orders.pucs}</p>
                      <p>Black Lanters: {orders.puc_black}</p>
                      <p>TOTAL COST: {'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35)} </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

  }
}

export default FinalOrder;
