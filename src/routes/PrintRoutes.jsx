import {Switch, Route} from 'react-router-dom'
import React from 'react'

import OrdersCollectedPrint from '../components/Director/OrdersCollectedPrint'
import OrdersPlacedPrint from '../components/Director/OrdersPlacedPrint'
import BasePrint from '../components/Landing/BasePrint'
import OrdersConfirmedList from '../components/Director/OrdersConfirmedList'
import FinalOrder from '../components/User/FinalOrder'
import GrandTotal from '../components/Director/GrandTotal'

export default ( 
    <Switch>
        <Route exact path='/print/' component={BasePrint}/>
        <Route path='/print/director-confirmed-list' component={OrdersConfirmedList}/>
        <Route path='/print/director-collected-print' component={OrdersCollectedPrint}/>
        <Route path='/print/director-placed-print' component={OrdersPlacedPrint}/>
        <Route path='/print/student-final-order' component={FinalOrder}/>
        <Route path='/print/director-balances' component={GrandTotal}/>
    </Switch>
)