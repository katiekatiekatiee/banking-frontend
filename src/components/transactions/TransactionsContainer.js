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
                <ul>
                    {this.props.transactions.map(transaction => <li key={transaction.id}>{transaction.date} | {transaction.amount}</li>)}
                </ul>
            </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
        transactions: state.transactions 
    }

}

function mapDispatchToProps(dispatch) {
    return {
        dispatchPostTransactions: () => dispatch(postTransactions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)