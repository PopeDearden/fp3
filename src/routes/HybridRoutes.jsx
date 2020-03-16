import {Switch, Route} from 'react-router-dom'
import React from 'react'
import HybridDash from '../components/Hybrid/HybridDash'
import HybridSamples from '../components/Hybrid/HybridSamples'
import SampleUpdate from '../components/Hybrid/HybridUpdateSample'
import InvoiceHistory from '../components/Hybrid/InvoiceHistory'

export default ( 
    <Switch>
        <Route exact path='/hybridlight/' component={HybridDash} />
        <Route path='/hybridlight/samples-request' component={HybridSamples}/>
        <Route path='/hybridlight/samples-update/:id' component={SampleUpdate}/>
        <Route path='/hybridlight/invoice/history' component={InvoiceHistory}/>
    </Switch>
)