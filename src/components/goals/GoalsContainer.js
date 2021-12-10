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
              
               <div>Total Saved: {savedTotal} </div>
                 
                <h3>Reasons to Save:</h3>      
                <ul>
                    {this.props.goals.map(goal => <li key={goal.id}>
                        {goal.name}
                    </li>)}
                </ul>
                
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

// function mapDispatchToProps(dispatch) {
//     return {
//         dispatchPostGoals: () => dispatch(postGoals())
//     }
// }

export default connect(mapStateToProps)(GoalsContainer)
