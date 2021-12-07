// import React from 'react'
// import { Switch, Route } from 'react-router-dom';
// import GoalsContainer from './goals/GoalsContainer';
// import TransactionsContainer from './transactions/TransactionsContainer';
// import NewTransactionForm from './transactions/NewTransactionForm';

import NavBar from './NavBar'


// export default function Displays() {
    
//     return (
//         <NavBar />
         
//         // <Switch>
//         //     <Route path="/transaction-history" component={routerProps => <TransactionsContainer routerProps={routerProps}/>}></Route>
//         //     <Route path="/" component={routerProps => <GoalsContainer routerProps={routerProps}/>}></Route>
//         //     <Route exact path="/transactions/new" component={routerProps => <NewTransactionForm routerProps={routerProps} />}></Route>
           
//         // </Switch>
        
//     )
// }

// export default function Displays = () => {
//     return( <NavBar />)
// }

import React, { Component } from 'react'

export default class Displays extends Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}




