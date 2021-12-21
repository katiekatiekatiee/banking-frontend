import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionCard from './TransactionCard';

class TransactionsContainer extends Component {

    state = {
        sorted: false
    }
    

    render() {


        // numbers.sort(function(a, b) {
        //     return a - b;
        //   });
        const sortedTransactions = [...this.props.transactions].sort((a, b) => (a.amount - b.amount))
        

        return (
        
            <div className="transactions-list">
                <h2>Transaction History</h2>
                <button onClick={() => this.setState({sorted: !this.state.sorted})}>Click to Sort</button>
                  {this.state.sorted ? sortedTransactions.map(t => <TransactionCard key={t.id} {...t} /> )  : this.props.transactions.map(t => <TransactionCard key={t.id} {...t} /> )}
                    
            </div>
       
        );
    }
}

const mapStateToProps = state => ({
    
    transactions: state.transactions

})

export default connect(mapStateToProps)(TransactionsContainer)


