import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionCard from './TransactionCard';

class TransactionsContainer extends Component {

    render() {

        return (
        
            <div className="transactions-list">
                <h2>Transaction History</h2>
                    {this.props.transactions.map(t => <TransactionCard key={t.id} {...t} /> )}
                    
            </div>
       
        );
    }
}

const mapStateToProps = state => ({
    
    transactions: state.transactions

})

export default connect(mapStateToProps)(TransactionsContainer)


