import React, { Component } from 'react';
import { addTransaction } from '../../redux/transactionsActions';
import { connect } from 'react-redux'

class NewTransactionForm extends Component {

    state = {
        date: "",
        amount: "",
        goal: ""
      }
    
    //   handleChange = e => {
    //     this.setState({
    //         date: e.target.value,
    //         amount: e.target.value,
    //         goal: e.target.value})
    //   }
    
    //   handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.dispatchAddTransaction(this.state)
        
    //     this.setState({
    //         name: "",
    //         amount: "",
    //         goal: ""})
    //   }

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