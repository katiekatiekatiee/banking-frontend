import React from 'react'
import { connect } from 'react-redux'

const TransactionSum = (props) => {
    const transactionAmounts = props.transactions.map((t) => t.amount)
        
    const savedTotal = transactionAmounts.reduce(
        (a, b) => a + b, 0
    );

    return(
        <div className="total">Total Saved: ${savedTotal} </div>
    )
    
}

function mapStateToProps(state){
    return{
        transactions: state.transactions
    }

}

export default connect(mapStateToProps)(TransactionSum)