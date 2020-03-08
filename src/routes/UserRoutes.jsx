import {Switch, Route} from 'react-router-dom'
import React from 'react'
import UserDash from '../components/User/UserDash'
import CreateOrder from '../components/User/CreateOrder'
// import UserLogin from '../components/User/UserLogin'
import InProgress from '../components/User/InProgress'
import Collected from '../components/User/Collected'
import EditOrder from '../components/User/OrderEdit'

export default ( 
    <Switch>
        <Route exact path='/user/' component={UserDash} />
        <Route path='/user/create-order' component={CreateOrder}/>
        <Route path='/user/in-progress' component={InProgress}/>
        <Route path='/user/collected' component={Collected}/>
        <Route path='/user/edit-order/:id' component={EditOrder}/>
    </Switch>
)