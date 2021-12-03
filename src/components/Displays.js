import React from 'react'
import { Switch, Route } from 'react-router-dom';
import TransactionsContainer from './transactions/TransactionsContainer';


export default function Displays() {
    return (
        <Switch>
            <Route path="/transactions-history" component={routerProps => <TransactionsContainer routerProps={routerProps}/>}></Route>
        </Switch>
    )
}
