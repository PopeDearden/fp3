import {Switch, Route} from 'react-router-dom'
import React from 'react'
import DirectorDash from '../components/Director/DirectorDash'
import CreateUser from '../components/Director/CreateUser'
import OrdersInProgress from '../components/Director/OrdersInProgress'

export default ( 
    <Switch>
        <Route exact path='/director' component={DirectorDash} />
        <Route path='/director/create-user' component={CreateUser}/>
        <Route path='/director/in-progress' component={OrdersInProgress}/>

    </Switch>
)