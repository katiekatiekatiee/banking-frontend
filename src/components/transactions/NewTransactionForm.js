import React, { Component } from 'react';
import { addTransaction } from '../../redux/transactionsActions';
import { connect } from 'react-redux'

import React, { Component } from 'react'

class NewTransactionForm extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="transaction-date-input">Date:</label>
            <input 
                 id="transaction-date-input" 
                 onChange={this.handleChange} 
                 value={this.state.date} 
                 type="text" />

            <label htmlFor="transaction-amount-input">Amount:</label>
            <input 
                 id="transaction-amount-input" 
                 onChange={this.handleChange} 
                 value={this.state.amount} 
                 type="text" />

            <label htmlFor="transaction-goal-input">Goal:</label>
            <input 
                 id="transaction-goal-input" 
                 onChange={this.handleChange} 
                 value={this.state.goal.id} 
                 type="text" />

             <input type="submit" />

        </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
      dispatchAddTransaction: (trans) => dispatch(addTransaction(trans))
    }
  }


export default connect(null, mapDispatchToProps)(NewTransactionForm)