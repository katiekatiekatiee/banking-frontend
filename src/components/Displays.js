import React from 'react'
import { Switch, Route } from 'react-router-dom';
import GoalsContainer from './goals/GoalsContainer';
import TransactionsContainer from './transactions/TransactionsContainer';


export default function Displays() {
    return (
        <Switch>
            <Route path="/transaction-history" component={routerProps => <TransactionsContainer routerProps={routerProps}/>}></Route>
            <GoalsContainer />
        </Switch>
    )
}
