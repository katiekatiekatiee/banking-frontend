import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTransactions } from './../../redux/transactionsActions'

class TransactionsContainer extends Component {

    componentDidMount(){
        this.props.dispatchPostTransactions()
    }

    render(){
        
        return (
            
            <div>
                <h2>Transaction History</h2>
                <div>
                    {this.props.transactions.map(transaction => <p key={transaction.id}>
        
                        {transaction.date} | {transaction.amount} | {transaction.goal_id}
                    </p>)}
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
        dispatchPostTransactions: () => dispatch(postTransactions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)