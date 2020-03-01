import {Switch, Route} from 'react-router-dom'
import React from 'react'
import AdminDash from '../components/Admin/AdminDash'
import InProgress from '../components/Admin/InProgressTab'
import Interested from '../components/Admin/InterestedTab'
import PlacedOrders from '../components/Admin/PlacedOrders'
import ViewAndConfirm from'../components/Admin/ViewAndConfirmOrder'
import SchoolProgress from '../components/Admin/ViewScoolProgress'

export default ( 
    <Switch>
        <Route path='/admin/dash' component={AdminDash} />
        <Route path='/admin/in-progress' component={InProgress} />
        <Route path='/admin/interested' component={Interested} />
        <Route path='/admin/placed-orders' component={PlacedOrders} />
        <Route path='/admin/view-and-confirm' component={ViewAndConfirm} />
        <Route path='/admin/school-progress' component={SchoolProgress} />
    </Switch>
)