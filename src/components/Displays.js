import React from 'react'
import { Switch, Route } from 'react-router-dom';
import GoalsContainer from './goals/GoalsContainer';
import TransactionsContainer from './transactions/TransactionsContainer';
import NewTransactionForm from './transactions/NewTransactionForm';



export default function Displays() {
    return (
         
        <Switch>
            <Route path="/transaction-history" component={routerProps => <TransactionsContainer routerProps={routerProps}/>}></Route>
            <Route path="/" component={routerProps => <GoalsContainer routerProps={routerProps}/>}></Route>
            <Route exact path="/transactions/new" component={routerProps => <NewTransactionForm routerProps={routerProps} />}></Route>
           
        </Switch>
        
    )
}


