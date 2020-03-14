import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'



class PlaceOrder extends Component {
  constructor(s) {
    super()
    this.state = {
      orders: [],
      totalFlash: 0,
      totalYellowFlash: 0,
      totalLantern: 0
    }
  }
  async componentDidMount() {
    await axios.get(`/api/director/confirmed`).then(res => {
      console.log(res.data)
      this.setState({
        orders: res.data,
      })
    })
    await axios.get('/api/director/samples').then(res=>{
      console.log(res.data)
      this.setState({
        black_flash_sample: res.data.samples[0].black_flash_sample,
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
  placeOrder = () => {
    Swal.fire({
      title: 'Place Order',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Finalize',
      html:  `<p style="font-size: 2rem;" >By clicking 'finalize' you are agreeing to pay in full $${(this.state.totalFlash * 15 + this.state.totalYellowFlash * 15 + this.state.totalLantern * (35 / 2)).toFixed(2)} upon receiving the delivery of your ordered products.`
    }).then(async(result) => {
      if(result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Thank You! Your order has been placed.',
          showConfirmButton: false,
          timer: 3000
        })
      }
    })
  }

  render() {
    return (
      <div className="App" >
        <div class="Invoice-Style">
          <div class="Title-Bar">
            <h2>   <i class="far fa-envelope"></i> Finalize and send order</h2>
          </div>
          <h1>Totals for confirmed orders: </h1>
          <br></br>
          {/* <h2>{this.state.totalFlash} Black Flashlights</h2>
          <h2>{this.state.totalYellowFlash} Yellow Flashlights</h2>
          <h2>{this.state.totalLantern} Yellow Lanterns</h2> */}
          {/* <h2>{this.state.totalBlackPuc}</h2> */}
          <table class="Finalize">
            <thead>
              <tr>
                <th>
                  Product
                </th>
                <th>
                  Quantity
                </th>
                <th>
                  Your Cost
                </th>
                <th>
                  Total
                  </th>
              </tr>
            </thead>
            <tr>
              <td>Black Flashlight</td>
              <td>{this.state.totalFlash}</td>
              <td>$15.00</td>
              <td>${this.state.totalFlash * 15}.00</td>
            </tr>
            <tr>
              <td>Yellow Flashlight</td>
              <td>{this.state.totalYellowFlash}</td>
              <td>$15.00</td>
              <td>${this.state.totalYellowFlash * 15}.00</td>
            </tr>
            <tr>
              <td>Yellow Lantern</td>
              <td>{this.state.totalLantern}</td>
              <td>$17.50</td>
              <td>${(this.state.totalLantern * (35 / 2)).toFixed(2)}</td>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>TOTAL COST</th>
              <th>${(this.state.totalFlash * 15 + this.state.totalYellowFlash * 15 + this.state.totalLantern * (35 / 2)).toFixed(2)}</th>
            </tr>
            <tr>
              <td>Remaining Samples</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
                <td>
                </td>
                <td>
                {this.state.black_flash_sample}
                </td>
                <td>
          
                </td>
                <td>
              
                  </td>
              </tr>
            

          </table>
          <br></br>
          <button id="medium" onClick={()=>this.placeOrder()}>Place Order</button>
        </div>



      </div>
    )

  }
}

export default PlaceOrder;
