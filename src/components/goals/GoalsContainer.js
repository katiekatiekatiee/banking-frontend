import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { postGoals } from './../../redux/goalsActions'
// import { GoalsDropdown } from './GoalsDropdown'

class GoalsContainer extends Component {

    // componentDidMount(){
    //     this.props.dispatchPostGoals()
    // }

    render() {

            const transactionAmounts = this.props.transactions.map((t) => t.amount)
        
            const savedTotal = transactionAmounts.reduce(
              (a, b) => a + b, 0
            );
        

        return (
            <div>
              
               <div className="total">Total Saved: ${savedTotal} </div>
                 
                <h3>Reasons to Save:</h3>      
                <ol>
                    {this.props.goals.map(goal => <li key={goal.id}>
                        {goal.name}
                    </li>)}
                </ol>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        goals: state.goals, 
        transactions: state.transactions
    }

}

export default connect(mapStateToProps)(GoalsContainer)




