import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { postTransactions } from './../../redux/transactionsActions'
import { deleteTransaction } from './../../redux/transactionsActions'

class TransactionsContainer extends Component {

    // componentDidMount(){
    //     this.props.dispatchPostTransactions()
    // }

    handleDelete = () => {
        // console.log(this.props.transaction) //transaction is undefined
        this.props.dispatchDeleteTransaction(this.props.transaction.id)
      }

    render(){

        return (
            <div>
                <h2>Transaction History</h2>
                <div>
                    {this.props.transactions.map(transaction => {

                    const findGoal = this.props.goals.find(({id}) => {
                        // console.log(id, transaction.goal_id)
                        return id === transaction.goal_id})
                        return <ul key={transaction.id}>
                        
                        <li>Date: {transaction.date}<br/>
                        Amount: ${transaction.amount}<br/>
                        Goal: {findGoal && findGoal.name}<br/>
                        <button onClick={this.handleDelete}>Delete Transaction</button></li><br/>
                    </ul>})}
    
                </div>
            </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
        transactions: state.transactions, 
        goals: state.goals
    }

}

function mapDispatchToProps(dispatch) {
    return {
        dispatchDeleteTransaction: (id) => dispatch( deleteTransaction(id) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)