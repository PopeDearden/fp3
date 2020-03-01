import React, { Component } from "react";
import logo from './logo.svg';
import './Reset.scss'
import './App.scss';
import { withRouter } from "react-router-dom";
// import AdminRoutes from './routes/AdminRoutes'
import { Switch, Route } from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin'
import Landing from './components/Landing/Landing'
import DirectorLogin from './components/Director/DirectorLogin'
import UserLogin from './components/User/UserLogin'
class App extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "App" >
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/admin' component={AdminLogin} />
          <Route path='/user' component={UserLogin} />
          <Route path='/director' component={DirectorLogin} />
        </Switch>
      </div>
    )

  }
}

export default withRouter(App);
