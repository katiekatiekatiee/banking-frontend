import React, { Component } from 'react';
import { addTransaction } from '../../redux/transactionsActions';
import { connect } from 'react-redux'

class NewTransactionForm extends Component {

    state = {
        date: "",
        amount: "",
        goal: ""
      }
    
      handleChange = e => {
        this.setState({state: 
            e.target.value})
      }

    //   handleChange = e => {
    //     const value = e.target.value;
    //     this.setState({state:
    //         ...state,
    //         [e.target.name]: value
    //   })
    // }
    
      handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchAddTransaction(this.state)
        
        this.setState({
            name: "",
            amount: "",
            goal: ""})
      }

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
            <select id="transaction-goal-input" onChange={this.handleChange} value={this.state.goal.id} type="text" >
                {this.props.goals.map(goal => <option value={goal.id} key={goal.id}>{goal.name}</option>)}
            </select>

             <input type="submit" value="Post Transaction" />

        </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
      dispatchAddTransaction: (trans) => dispatch(addTransaction(trans))
    }
  }

function mapStateToProps(state){
    return{
        goals: state.goals 
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionForm)