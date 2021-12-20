import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { postGoals } from './../../redux/goalsActions'
// import { GoalsDropdown } from './GoalsDropdown'

class GoalsContainer extends Component {

    render() {

        return (
            <div>
                 
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
    }

}

export default connect(mapStateToProps)(GoalsContainer)




