import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTransactions } from './../../redux/transactionsActions'

class TransactionsContainer extends Component {

    componentDidMount(){
        fetch("http://localhost:3000/transactions")
        .then(r => r.json())
        .then(transactionData => this.props.dispatchPostTransactions(transactionData))
    }

    render(){
        return (
            <div>
                Transactions Go Here!
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
        dispatchPostTransactions: (transactions) => dispatch(postTransactions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)