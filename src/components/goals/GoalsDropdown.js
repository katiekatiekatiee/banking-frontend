import React from 'react'

export default function GoalsDropdown() {
    return (
        <div>
            <select>
                {this.props.goals.map(goal => <option value={goal.id} key={goal.id}>{goal.name}</option>)}
            </select>
        </div>
    )
}

function mapStateToProps(state){
    return{
        goals: state.goals 
    }

}

export default connect(mapStateToProps)(GoalsDropdown)