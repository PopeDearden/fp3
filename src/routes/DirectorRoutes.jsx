import {Switch, Route} from 'react-router-dom'
import React from 'react'
import DirectorDash from '../components/Director/DirectorDash'
import CreateUser from '../components/Director/CreateUser'
import OrdersInProgress from '../components/Director/OrdersInProgress'
import OrdersCollected from '../components/Director/OrdersCollected'
import OrdersConfirmed from '../components/Director/OrdersConfirmed'
import PlaceOrder from '../components/Director/PlaceOrder'
import UserInfoList from '../components/Director/UserInfoList'

export default ( 
    <Switch>
        <Route exact path='/director' component={DirectorDash} />
        <Route path='/director/create-user' component={CreateUser}/>
        <Route path='/director/in-progress' component={OrdersInProgress}/>
        <Route path='/director/collected' component={OrdersCollected}/>
        <Route path='/director/confirmed' component={OrdersConfirmed}/>
        <Route path='/director/place-order' component={PlaceOrder}/>
        <Route path='/director/user-info-list' component={UserInfoList}/>

    </Switch>
)