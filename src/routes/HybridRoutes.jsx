import {Switch, Route} from 'react-router-dom'
import React from 'react'
import HybridDash from '../components/Hybrid/HybridDash'
import HybridSamples from '../components/Hybrid/HybridSamples'

export default ( 
    <Switch>
        <Route exact path='/hybridlight/' component={HybridDash} />
        <Route path='/hybridlight/samples-request' component={HybridSamples}/>
    </Switch>
)