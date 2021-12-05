import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postGoals } from './../../redux/goalsActions'
import { GoalsDropdown } from './GoalsDropdown'

class GoalsContainer extends Component {

    componentDidMount(){
        this.props.dispatchPostGoals()
    }

    render() {
        return (
            <div>
                {/* <h1>Savings Total: {insert functional component here that will add total of all savings}</h1> */}
                 <h2>Savings Totals (per goal)</h2>
                 {/* <GoalsDropdown goals={this.props.goals}/> */}
                 
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
        goals: state.goals 
    }

}

function mapDispatchToProps(dispatch) {
    return {
        dispatchPostGoals: () => dispatch(postGoals())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)
