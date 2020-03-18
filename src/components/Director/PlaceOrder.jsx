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
      totalLantern: 0,
      given: [],
      samples: [],
    }
  }
  async componentDidMount() {
    await axios.get(`/api/director/confirmed`).then(res => {
      console.log(res.data)
      this.setState({
        orders: res.data,
      })
    })
    await axios.get('/api/director/samples').then(res => {
      console.log(res.data.given)
      this.setState({
        samples: res.data.samples[0],
        given: res.data.given[0]

        // black_flash_sample: res.data.samples[0].black_flash_sample,
      })
      console.log(this.state.samples)
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
  placeOrder = (GrandTotal, black_flashlights, yellow_flashlights, yellow_pucs) => {
    Swal.fire({
      title: 'Place Order',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Finalize',
      html: `<p style="font-size: 2rem;" >By clicking 'finalize' you are agreeing to pay in full $${GrandTotal} upon receiving the delivery of your ordered products and returning any unused samples.`
    }).then(async (result) => {
      if (result.value) {
        console.log(black_flashlights + " " + yellow_flashlights + " " + yellow_pucs)
        await axios.put('/api/director/final', {black_flashlights, yellow_flashlights, yellow_pucs})
        Swal.fire({
          icon: 'success',
          title: 'Thank You! Your order has been placed.',
          showConfirmButton: false,
          timer: 3000
        })
      }
    })
  }
  ifNegative = (YellowLanternNeed, YellowFlashNeed, BlackFlashNeed) => {
    if( +YellowLanternNeed < 0 || +YellowFlashNeed < 0 || +BlackFlashNeed < 0) {
      return   <h2><i id="bad" class="fas fa-exclamation-triangle"> You have sample products that need to be returned!</i></h2>
              
    }
  }
  ifNegative2 = (YellowLanternNeed, YellowFlashNeed, BlackFlashNeed, TotalAfter) => {
    if( +YellowLanternNeed < 0 || +YellowFlashNeed < 0 || +BlackFlashNeed < 0) {
      return   <tr>
      <th></th>
      <th></th>
      <th>Total after returning unused samples</th>
      <th></th>
      <th></th>
      <th>${TotalAfter}</th>
    </tr>
    }
  }

  render() {
    const TotalAdditional = (((this.state.totalFlash -(this.state.samples.black_flash_sample - this.state.given.sample_light_black) ) * 15)+((this.state.totalYellowFlash - (this.state.samples.yellow_flash_sample - this.state.given.sample_light_yellow) )* 15)+(((this.state.totalLantern - (this.state.samples.yellow_puc_sample - this.state.given.sample_puc_yellow))* (35/2)))).toFixed(2)
    const GrandTotal = (((this.state.totalFlash -(this.state.samples.black_flash_sample - this.state.given.sample_light_black) ) * 15)+((this.state.totalYellowFlash - (this.state.samples.yellow_flash_sample - this.state.given.sample_light_yellow) )* 15)+(((this.state.totalLantern - (this.state.samples.yellow_puc_sample - this.state.given.sample_puc_yellow))* (35/2)))+((this.state.samples.black_flash_sample * 15 + this.state.samples.black_flash_sample * 15 + this.state.samples.yellow_puc_sample * (35 / 2)))).toFixed(2)
    const YellowLanternNeed = this.state.totalLantern - (this.state.samples.yellow_puc_sample - this.state.given.sample_puc_yellow)
    const YellowFlashNeed = this.state.totalYellowFlash - (this.state.samples.yellow_flash_sample - this.state.given.sample_light_yellow)
    const BlackFlashNeed = this.state.totalFlash -(this.state.samples.black_flash_sample - this.state.given.sample_light_black) 
    // const TotalAfter = (this.state.given.sample_light_yellow*15 + this.state.given.sample_puc_yellow*(35/2) + this.state.given.sample_light_black*15 + this.state.totalFlash*15 + this.state.totalYellowFlash*15 + this.state.totalLantern*(35/2)).toFixed(2)
    // const TotalAfter = (this.state.given.sample_light_yellow*15 + this.state.given.sample_puc_yellow*(35/2) + this.state.given.sample_light_black*15 + this.state.totalFlash*15 + this.state.totalYellowFlash*15 + this.state.totalLantern*(35/2)).toFixed(2)
   
    return (
      <div className="App" >
        <div class="Invoice-Style">
          <div class="Title-Bar">
            <h2>   <i class="far fa-envelope"></i> Finalize and send order</h2>
          </div>
          <h1>Review Order Information:</h1>
          {this.ifNegative(YellowLanternNeed, YellowFlashNeed, BlackFlashNeed)}
          <br></br>
          {/* <h2>{this.state.totalFlash} Black Flashlights</h2>
          <h2>{this.state.totalYellowFlash} Yellow Flashlights</h2>
          <h2>{this.state.totalLantern} Yellow Lanterns</h2> */}
          {/* <h2>{this.state.totalBlackPuc}</h2> */}
          <table class="Finalize">
            <thead>
              <tr>
                <th>
                  Samples given to your school:
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
                <th>
                  Samples given to students:
                </th>
                <th>
                  Remaining Samples
                </th>
             
              </tr>
            </thead>
            <tr>
              <td>Black Flashlight</td>
              <td>{this.state.samples.black_flash_sample}</td>
              <td>$15.00</td>
              <td>${this.state.samples.black_flash_sample * 15}.00</td>
              <td>{this.state.given.sample_light_black}</td>
                <td>{this.state.samples.black_flash_sample - this.state.given.sample_light_black}</td>
            </tr>
            <tr>
              <td>Yellow Flashlight</td>
              <td>{this.state.samples.yellow_flash_sample}</td>
              <td>$15.00</td>
              <td>${this.state.samples.yellow_flash_sample * 15}.00</td>
              <td>{this.state.given.sample_light_yellow}</td>
                <td>{this.state.samples.yellow_flash_sample - this.state.given.sample_light_yellow}</td>
            </tr>
            <tr>
              <td>Yellow Lantern</td>
              <td>{this.state.samples.yellow_puc_sample}</td>
              <td>$17.50</td>
              <td>${this.state.samples.yellow_puc_sample * (35 / 2)}.00</td>
              <td>{this.state.given.sample_puc_yellow}</td>
                <td>{this.state.samples.yellow_puc_sample - this.state.given.sample_puc_yellow}</td>
            </tr>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>TOTAL SAMPLE COST</th>
                <th>${(this.state.samples.black_flash_sample * 15 + this.state.samples.black_flash_sample * 15 + this.state.samples.yellow_puc_sample * (35 / 2)).toFixed(2)}</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <thead>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </thead>
            <thead>
              <tr>
                <th>
                  Products sold by students
                </th>
                <th>
                  Quantity
                </th>
                <th>
                  Quantity Needed After Remaining samples used<br></br>Negative numbers represent unused samples that need to be returned
                </th>
                <th>
                  Your Cost
                </th>
                <th></th>
                <th>
                  Total
                  </th>
              </tr>
            </thead>
            
            <tr>
              <td>Black Flashlight</td>
              <td>{this.state.totalFlash}</td>
              <td>{this.state.totalFlash -(this.state.samples.black_flash_sample - this.state.given.sample_light_black) }</td>
              <td>$15.00</td>
              <td></td>
              <td>${(this.state.totalFlash -(this.state.samples.black_flash_sample - this.state.given.sample_light_black) ) * 15}.00</td>
            </tr>
            <tr>
              <td>Yellow Flashlight</td>
              <td>{this.state.totalYellowFlash}</td>
              <td>{this.state.totalYellowFlash - (this.state.samples.yellow_flash_sample - this.state.given.sample_light_yellow)}</td>
              <td>$15.00</td>
              <td></td>
              <td>${(this.state.totalYellowFlash - (this.state.samples.yellow_flash_sample - this.state.given.sample_light_yellow) )* 15}.00</td>
            </tr>
            <tr>
              <td>Yellow Lantern</td>
              <td>{this.state.totalLantern}</td>
              <td>{this.state.totalLantern - (this.state.samples.yellow_puc_sample - this.state.given.sample_puc_yellow)}</td>
              <td>$17.50</td>
              <td></td>
              <td>${((this.state.totalLantern - (this.state.samples.yellow_puc_sample - this.state.given.sample_puc_yellow))*(35/2)).toFixed(2)}</td>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>TOTAL COST FOR<br></br>Additional Order</th>
              <th></th>
              <th></th>
              <th>${TotalAdditional}</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Grand Total</th>
              <th></th>
              <th></th>
              <th>${GrandTotal}</th>
            </tr>
            {/* {this.ifNegative2(YellowLanternNeed, YellowFlashNeed, BlackFlashNeed, TotalAfter)} */}


          </table>
          <br></br>
     
          <button id="medium" onClick={() => this.placeOrder(GrandTotal, BlackFlashNeed, YellowFlashNeed, YellowLanternNeed)}>Place Order</button>
        </div>



      </div>
    )

  }
}

export default PlaceOrder;
