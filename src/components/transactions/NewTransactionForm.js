import React, { Component } from 'react';
import { addTransaction } from '../../redux/transactionsActions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class NewTransactionForm extends Component {

    state = {
        date: "",
        amount: "",
        goal_id: ""
      }

      handleChange = e => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
      })
    }
    
      handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchAddTransaction(this.state)
        // debugger
        
        this.setState({
            date: "",
            amount: "",
            goal: ""})
      }

    render() {
        return (
            <div>
                <p>To add a transaction, enter the date (MM/DD/YY) and amount saved. <br/> Withdrawl transactions can be displayed using a hyphen (e.g. -25). <br/> Then select the goal the funds are being saved for!</p>
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="transaction-date-input">Date:</label>
            <input 
                 id="transaction-date-input" 
                 onChange={this.handleChange} 
                 value={this.state.date} 
                 name="date"
                 type="text" />

            <label htmlFor="transaction-amount-input">Amount:</label>
            <input 
                 id="transaction-amount-input" 
                 onChange={this.handleChange} 
                 value={this.state.amount} 
                 name="amount"
                 type="text" />

            <label htmlFor="transaction-goal-input">Goal:</label>
            <select id="transaction-goal-input" onChange={this.handleChange} value={this.state.goal_id} name="goal_id">
                {this.props.goals.map(goal => <option value={goal.id} key={goal.id}>{goal.name}</option>)}
            </select>

             {/* <input type="submit" value="" /> */}
             <Button as="input" type="submit" value="Post Transaction" />

        </form>
        </div>
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