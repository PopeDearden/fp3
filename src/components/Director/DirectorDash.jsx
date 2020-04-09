import React, { Component } from "react";
import axios from "axios";




class DirectorDash extends Component {
  constructor(s) {
    super()
    this.state = {
      remaining: {
        remaining_black_flash: 'loading...',
        remaining_yellow_flash: 'loading...',
        remaining_yellow_puc: 'loading...',
        },
      director: {},
    }
  }
 async componentDidMount () {
    await this.getSamples()
    await this.getRemaining()
  }
  getRemaining = async () => {
    await axios.get('/api/director/remaining').then(res => {
      console.log(res.data[0])
      if(res.data[0] === undefined) {
        return
      }
      else{
        this.setState({
          remaining: res.data[0]
        })
      }
    })
  }
  getSamples = async () => {
    await axios.get('/api/director/samples').then(res => {
      this.setState({
        director: res.data.samples[0],
        remaining: {
          remaining_black_flash: res.data.samples[0].black_flash_sample,
          remaining_yellow_flash: res.data.samples[0].yellow_flash_sample,
          remaining_yellow_puc: res.data.samples[0].yellow_puc_sample,
          }
        
      })
    })
  }

  tOrF = (check, message) => {
    if (check === true) {
      return (
        <i id="good" class="fas fa-check"></i>
        // <div>...in progress</div>
      //  <div></div>
        )
      }
      if(check === false) {
        return(
          <p id="warning">{message}</p>
        )
      }
      else {
        return (
          <p>Loading...</p>
      )
    }
  }

  render() {
    if(this.state.director.stage === 'registered'){

      return (
        <div className="App" >
          <div className="General-Content">
            <div className="Title-Bar">
              <h2>Director Dashboard</h2>
            </div>
            <div class="Split">
  
              <div className="A-Box">
                <h2>Remaining Samples</h2>
                <div className="B-Box">
                  <p>
                    Black flashlights: <b id="bold">{this.state.remaining.remaining_black_flash}</b>
                  </p>
                  <p>
                    Yellow flashlights:  <b id="bold">{this.state.remaining.remaining_yellow_flash}</b>
                  </p>
                  <p>
                    Yellow lanterns:  <b id="bold">{this.state.remaining.remaining_yellow_puc}</b>
                  </p>
                </div>
              </div>
              <div className="A-Box2">
                <h2>Other Info</h2>
                <div className="B-Box">
                  <p> Sample Order Sent by HybridLight: {this.tOrF(this.state.director.sample_processed, 'Waiting on Hybridlight to fulfill')} </p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      )
    }
    if(this.state.director.stage ==='order sent') {
      return(
        <div class="App">
          <div class="General-Content">
            <div class="Title-Bar">
              <h2>Director Dashboard</h2>
            </div>
            <div class="Split">
              <div class="A-Box2">
                <h2>Your Final Order<br></br> has been placed!</h2>
                <p>When Hybridlight fulfills your order, your invoice will be updated. So check the <a onClick={()=>this.props.history.push('/director/invoice')}>invoice tab</a> for updates.</p>
              </div>
              <div class="A-Box2">
                {/* <h2>If there was an error...</h2> */}
                <p>If you placed your final order by accident, or a student has sold additional lights than was was confirmed, please contact Julie.</p>
                <h2></h2>
                <p>Julie@yourbestfundraiserever.com</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
     else {
      return(
        <div>Loading....</div>
      )
    }

  }
}

export default DirectorDash;
