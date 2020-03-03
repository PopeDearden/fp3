import {Switch, Route} from 'react-router-dom'
import React from 'react'
import DirectorDash from '../components/Director/DirectorDash'

export default ( 
    <Switch>
        <Route exact path='/director' component={DirectorDash} />

    </Switch>
)