import {Switch, Route} from 'react-router-dom'
import React from 'react'
import AdminDash from '../components/Admin/AdminDash'
import InProgress from '../components/Admin/InProgressTab'
import Interested from '../components/Admin/InterestedTab'
import PlacedOrders from '../components/Admin/PlacedOrders'
import ViewAndConfirm from'../components/Admin/ViewAndConfirmOrder'
import SchoolProgress from '../components/Admin/ViewScoolProgress'
import CreateAdmin from '../components/Admin/CraeteAdmin'
import CreateDirector from'../components/Admin/CreateDirector'
import InvoiceHistory from '../components/Admin/InvoiceHistory'

export default ( 
    <Switch>
        <Route exact path='/admin/' component={AdminDash} />
        <Route path='/admin/in-progress' component={InProgress} />
        <Route path='/admin/interested' component={Interested} />
        <Route path='/admin/placed-orders' component={PlacedOrders} />
        <Route path='/admin/view-and-confirm' component={ViewAndConfirm} />
        <Route path='/admin/school-progress' component={SchoolProgress} />
        <Route path='/admin/create-admin' component={CreateAdmin} />
        <Route path='/admin/create-director' component={CreateDirector} />
        <Route path='/admin/invoice' component={InvoiceHistory} />

    </Switch>
)