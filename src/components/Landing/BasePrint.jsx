import React, { Component } from "react";
import '../../App.scss'
import { withRouter } from "react-router-dom";
import PrintRoutes from '../../routes/PrintRoutes'
import { Switch, Route } from 'react-router-dom'



class BasePrint extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App" >
          {PrintRoutes}
      </div>
    )

  }
}

export default BasePrint;
