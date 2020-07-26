import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GrandTotal from '../components/Director/GrandTotal'
import OrdersCollectedPrint from '../components/Director/OrdersCollectedPrint'
import OrdersConfirmedList from '../components/Director/OrdersConfirmedList'
import OrdersPlacedPrint from '../components/Director/OrdersPlacedPrint'
import Final from '../components/Hybrid/HybridUpdateFinalPrint'
import Sample from '../components/Hybrid/HybridUpdateSamplePrint'
import BasePrint from '../components/Landing/BasePrint'
import FinalOrder from '../components/User/FinalOrder'


export default ( 
    <Switch>
        <Route exact path='/print/' component={BasePrint}/>
        <Route path='/print/director-confirmed-list' component={OrdersConfirmedList}/>
        <Route path='/print/director-collected-print' component={OrdersCollectedPrint}/>
        <Route path='/print/director-placed-print' component={OrdersPlacedPrint}/>
        <Route path='/print/student-final-order' component={FinalOrder}/>
        <Route path='/print/director-balances' component={GrandTotal}/>
        <Route path='/print/hybridlight/sample/:id' component={Sample}/>
        <Route path='/print/hybridlight/final/:id' component={Final}/>
    </Switch>
)