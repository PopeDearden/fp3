import {Switch, Route} from 'react-router-dom'
import React from 'react'
import HybridDash from '../components/Hybrid/HybridDash'
import HybridSamples from '../components/Hybrid/HybridSamples'
import SampleUpdate from '../components/Hybrid/HybridUpdateSample'
import InvoiceHistory from '../components/Hybrid/InvoiceHistory'
import HybridFinal from '../components/Hybrid/HybridFinal'
import FinalUpdate from '../components/Hybrid/HybridUpdateFinal'
export default ( 
    <Switch>
        <Route exact path='/hybridlight/' component={HybridDash} />
        <Route path='/hybridlight/samples-request' component={HybridSamples}/>
        <Route path='/hybridlight/samples-update/:id' component={SampleUpdate}/>
        <Route path='/hybridlight/final/:id' component={FinalUpdate}/>
        <Route path='/hybridlight/invoice/history' component={InvoiceHistory}/>
        <Route path='/hybridlight/orders/final' component={HybridFinal}/>
    </Switch>
)