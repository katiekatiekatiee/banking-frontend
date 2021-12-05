export const postGoals = () => {
    return (dispatch) => {
      fetch("http://localhost:3000/goals")
      .then(r => r.json())
      .then(goals => dispatch({type: "POST_GOALS", payload: goals}))
    }
  }