//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import { NavLink } from 'react-router-dom';
import Displays from './components/Displays';
import { connect } from 'react-redux'
import { postGoals } from './redux/goalsActions';
import { postTransactions } from './redux/transactionsActions'

class App extends Component {

  componentDidMount(){
    this.props.dispatchPostGoals()
    this.props.dispatchPostTransactions()
  }

render(){
  return (
    <div>
      <h1>Track Your Savings Goals!</h1>
      <div className="nav-links">
        <NavLink to="/" >Home</NavLink> |  
        <NavLink to="/transaction-history">Transaction History</NavLink> | 
        <NavLink to="/transactions/new">Add Transaction</NavLink> 
        
      </div>
      <Displays />
    </div>
    
    
  )};
}

function mapDispatchToProps(dispatch) {
  return {
      dispatchPostGoals: () => dispatch(postGoals()),
      dispatchPostTransactions: () => dispatch(postTransactions())
  }
}

export default connect(null, mapDispatchToProps)(App);
