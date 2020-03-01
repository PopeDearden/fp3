import {Switch, Route} from 'react-router-dom'
import React from 'react'
import AdminDash from '../components/Admin/AdminDash'

export default ( 
    <Switch>
        <Route path='/admin/dash' component={AdminDash} />
    </Switch>
)