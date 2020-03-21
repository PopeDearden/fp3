import {Switch, Route} from 'react-router-dom'
import React from 'react'
import DirectorDash from '../components/Director/DirectorDash'
import CreateUser from '../components/Director/CreateUser'
import OrdersInProgress from '../components/Director/OrdersInProgress'
import OrdersCollected from '../components/Director/OrdersCollected'
import OrdersConfirmed from '../components/Director/OrdersConfirmed'
import PlaceOrder from '../components/Director/PlaceOrder'
import UserInfoList from '../components/Director/UserInfoList'
import OrdersCollectedPrint from '../components/Director/OrdersCollectedPrint'
import ConfirmOptions from '../components/Director/ConfirmOptions'
import ordersConfirmedList from '../components/Director/OrdersConfirmedList'
import UpdateOrder from '../components/Director/UpdateUser'

export default ( 
    <Switch>
        <Route exact path='/director' component={DirectorDash} />
        <Route path='/director/create-user' component={CreateUser}/>
        <Route path='/director/in-progress' component={OrdersInProgress}/>
        <Route path='/director/collected' component={OrdersCollected}/>
        <Route path='/director/collected-print' component={OrdersCollectedPrint}/>
        <Route path='/director/confirmed-list' component={ordersConfirmedList}/>
        <Route path='/director/confirmed' component={OrdersConfirmed}/>
        <Route path='/director/place-order' component={PlaceOrder}/>
        <Route path='/director/user-info-list' component={UserInfoList}/>
        <Route path='/director/confirm-options' component={ConfirmOptions}/>
        <Route path='/director/update-user/:id' component={UpdateOrder}/>
    </Switch>
)