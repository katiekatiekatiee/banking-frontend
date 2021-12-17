import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { postTransactions } from './../../redux/transactionsActions'
// import { deleteTransaction } from './../../redux/transactionsActions';
import TransactionCard from './TransactionCard';

class TransactionsContainer extends Component {

    // componentDidMount(){
    //     this.props.dispatchPostTransactions()
    // }

    // handleDelete = (transId) => {
    //     // debugger
    //     // console.log(this.props.transaction) //transaction is undefined
    //     this.props.dispatchDeleteTransaction(parseInt(transId, 10))
    //   }

    // handleSearch = (e) => {
    //     // debugger
    //     this.props.transactions.filter((trans) => {
    //         return e.target.value = trans.date
    //     })
    // }
    render() {
        return (
        <div className="transactions-list">
            <h2>Transaction History</h2>
            {this.props.transactions.map(t => <TransactionCard key={t.id} {...t} /> )}
        </div>
        );
    }

    // render(){

    //     return (
    //         <div>
    //             <h2>Transaction History</h2>
    //             <div>
    //                 {/* <p>Search Transactions by date (MM/DD/YY): <input type="text" placeholder="Search..." onChange={this.handleSearch}></input></p> */}
    //                 {this.props.transactions.map((transaction) => {

    //                 const findGoal = this.props.goals.find(({id}) => {
    //                     // console.log(id, transaction.goal_id)
    //                     return id === transaction.goal_id})
    //                     return <ul key={transaction.id}>
                        
    //                     <li>Date: {transaction.date}<br/>
    //                     Amount: ${transaction.amount}<br/>
    //                     Goal: {findGoal && findGoal.name}<br/>
    //                     <button onClick={() => this.handleDelete(transaction.id)}>Delete Transaction</button></li><br/>
    //                 </ul>})}
    
    //             </div>
    //         </div>
    //     )
    // }
   
}

const mapStateToProps = state => ({
    
        transactions: state.transactions, 
        goals: state.goals

})

// const mapDispatchToProps = (dispatch) => ({
    
//         dispatchDeleteTransaction: (id) => dispatch( deleteTransaction(id) )
    
// })

export default connect(mapStateToProps)(TransactionsContainer)