import React, { Component } from 'react'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class GoalsContainer extends Component {
    render() {
        return (
            <div>
                We got dem goals
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
