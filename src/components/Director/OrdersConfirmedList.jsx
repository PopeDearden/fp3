import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment'




class OrdersConfirmedList extends Component {
  constructor(s) {
    super()
    this.state = {
      totalFlash: 0,
      totalLantern: 0,
      totalYellowFlash: 0,
      totalBlackPuc: 0,
      orders: [],
      totalMoneyNeed: 0,
      possible: 0,
      searchInput2: '',
      searchInput3: '',
      students: [],
    }
  }
  async componentDidMount() {
    await axios.get('/api/director/students').then(res => {
      console.log(res.data)
      this.setState({
        students: res.data
      })
    })
    await axios.get(`/api/director/confirmed`).then(res => {
      console.log(res.data)
      this.setState({
        orders: res.data,
        searchInput: ''
      })
    })
    this.calculateTotal()
  }

  calculateTotal = () => {
    let totalFlash = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalFlash += this.state.orders[i].flashlights
    }
    let totalLantern = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalLantern += this.state.orders[i].pucs
    }
    let totalYellowFlash = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalYellowFlash += this.state.orders[i].flashlight_yellow
    }
    let totalBlackPuc = 0
    for (let i = 0; i < this.state.orders.length; i++) {
      totalBlackPuc += this.state.orders[i].puc_black
    }
    let totalMoneyNeed = totalLantern * 35 + totalFlash * 30 + totalYellowFlash * 30 + totalBlackPuc * 35
    let possible = totalMoneyNeed / 2
    this.setState({
      totalFlash: totalFlash,
      totalLantern: totalLantern,
      totalYellowFlash: totalYellowFlash,
      totalBlackPuc: totalBlackPuc,
      totalMoneyNeed: totalMoneyNeed.toFixed(2),
      possible: possible.toFixed(2),
    })
  }
  calculate = (orders, student, type) => {

    let filtered = orders.filter((element) => { return element.user_id === student.user_id })
    let totalFlashBlack = 0
    let totalFlashYellow = 0
    let totalLanternYellow = 0
    let totalLanternBlack = 0
    for (let i = 0; i < filtered.length; i++) {
      totalFlashBlack += filtered[i].flashlights
    }
    for (let i = 0; i < filtered.length; i++) {
      totalFlashYellow += filtered[i].flashlight_yellow
    }
    for (let i = 0; i < filtered.length; i++) {
      totalLanternYellow += filtered[i].pucs
    }
    for (let i = 0; i < filtered.length; i++) {
      totalLanternBlack += filtered[i].puc_black
    }
    let totalPrice = totalFlashBlack * 30 + totalFlashYellow * 30 + totalLanternYellow * 35 + totalLanternBlack * 35
    return { totalFlashBlack, totalFlashYellow, totalLanternYellow, totalLanternBlack, totalPrice }
  }


  buildTable = (orders, id) => {
    let filtered = orders.filter((element) => {
      return element.user_id === id
    })
    return filtered

  }

  render() {
    const student2 = this.state.students.filter((element, index) => {
      return element.last_name.toLowerCase().includes(this.state.searchInput2.toLowerCase())
    })
    const student = student2.filter((element, index) => {
      return element.first_name.toLowerCase().includes(this.state.searchInput3.toLowerCase())
    })
    const orders = this.state.orders.filter((element, index) => {
      return element.first_name_cust.toLowerCase().includes(this.state.searchInput.toLowerCase()) || element.last_name_cust.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    return (
      <div className="App" >
        <button id="GeneratePrint" onClick={() => window.print()}>Generate PDF for Collected Orders</button>
        <div className="Printing">

          <h1>Orders confirmed and ready to be placed for your school:</h1>
          <h2>Total Black Flashlights: {this.state.totalFlash}</h2>
          <h2>Total Yellow Flashlights: {this.state.totalYellowFlash}</h2>
          <h2>Total Yellow Flashlights:     {this.state.totalLantern}</h2>
          {/* <h2>Total Black Lanterns:     {this.state.totalBlackPuc}</h2> */}
          <h2>Total Potential Earnings: ${this.state.possible}</h2>
          <h2>Total $ Collected: ${this.state.totalMoneyNeed}</h2>
          <div class="Printing">
            {student.map(student => (
              <div id="Individual">

                <p id="StudentName">{student.first_name} {student.last_name}</p>
                <div class="TotalCollectedPrint" >
                  <p>Total Black Flashlights: {this.calculate(orders, student).totalFlashBlack}</p>
                  <p>Total Yellow Flashlights: {this.calculate(orders, student).totalFlashYellow}</p>
                  <p>Total Yellow Lanterns: {this.calculate(orders, student).totalLanternYellow}</p>
                  <p>Total $ collected: ${this.calculate(orders, student).totalPrice.toFixed(2)}</p>
                </div>
                {orders.filter((element) => { return element.user_id === student.user_id }).map(orders => (
                  <div className="OneOrder" key={orders.order_id}>
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
                          <td>${30*+orders.flashlights}.00</td>
                        </tr>
                        <tr>
                          <td>Yellow Flashlights</td>
                          <td>{orders.flashlight_yellow}</td>
                          <td>$30.00</td>
                          <td>${30*+orders.flashlight_yellow}.00</td>
                        </tr>
                        <tr>
                          <td>Yellow Lanterns</td>
                          <td>{orders.pucs}</td>
                          <td>$35.00</td>
                          <td>${35*+orders.pucs}.00</td>
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
                          <td>{'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35)}</td>
                        </tr>
                      </table>
                      {/* <p>Black Flashlights: {orders.flashlights}</p>
                      <p>Yellow Flashlights: {orders.flashlight_yellow}</p>
                      <p>Yellow Lanterns: {orders.pucs}</p>
                      <p>Black Lanters: {orders.puc_black}</p>
                      <p>TOTAL COST: {'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35)} </p> */}
                    </div>
                    {/* <td id="TotalCollected">{'$' + (orders.flashlights * 30 + orders.flashlight_yellow * 30 + orders.pucs * 35 + orders.puc_black * 35)}   <i class="fas fa-hand-holding-usd"></i></td> */}
                  </div>
                ))}
                {function calculate() {
                  let filtered = orders.filter((element) => { return element.user_id === student.user_id })
                  const totalFlash = 0
                  for (let i = 0; i < filtered.length; i++) {
                    totalFlash += filtered[i].flashlights
                  }
                }
                }

              </div>
            ))}




          </div>


        </div>
      </div>
    )

  }
}
export default OrdersConfirmedList;
