import {Switch, Route} from 'react-router-dom'
import React from 'react'
import UserDash from '../components/User/UserDash'
import CreateOrder from '../components/User/CreateOrder'
// import UserLogin from '../components/User/UserLogin'

export default ( 
    <Switch>
        <Route exact path='/user/' component={UserDash} />
        <Route path='/user/create-order' component={CreateOrder}/>
    </Switch>
)