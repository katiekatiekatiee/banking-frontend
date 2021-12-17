import React from "react";
import { deleteTransaction } from './../../redux/transactionsActions';
import { connect } from 'react-redux';

const TransactionCard = (props) => {
    function handleDelete () {
        // debugger
        props.dispatchDeleteTransaction(parseInt(props.id))
      }

      return(
          <div>
                <ul key={props.id}>
                    
                    <li>Date: {props.date}<br/>
                        Amount: ${props.amount}<br/>
                        Goal: {props.goals.find(({id}) => {
                            return id === props.goal_id}).name}<br/>
                    <button onClick={() => handleDelete(props.id)}>Delete Transaction</button></li><br/>
                </ul>

            </div>
      )

}

const mapStateToProps = state => ({
    
    goals: state.goals

})

const mapDispatchToProps = (dispatch) => ({
    
            dispatchDeleteTransaction: (id) => dispatch( deleteTransaction(id) )
        
    })

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCard)

