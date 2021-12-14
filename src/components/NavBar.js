import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GoalsContainer from './goals/GoalsContainer';
import TransactionsContainer from './transactions/TransactionsContainer';
import NewTransactionForm from './transactions/NewTransactionForm';
//import { ButtonGroup, Button } from 'react-bootstrap';
// import NavMenu from './NavMenu'
// import { Breadcrumb } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div className="navbar">
          
            <Switch>
                <Route exact path="/transactions" component={routerProps => <TransactionsContainer routerProps={routerProps}/>}></Route>
                <Route exact path="/" component={routerProps => <GoalsContainer routerProps={routerProps}/>}></Route> 
                <Route exact path="/transactions/new" component={routerProps => <NewTransactionForm routerProps={routerProps} />}></Route> 
            </Switch>
           
            
        </div>
    )
}

export default NavBar;

