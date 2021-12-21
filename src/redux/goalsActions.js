export const postGoals = () => {
  console.log('c')
    return (dispatch) => {
      fetch("http://localhost:3000/goals")
      .then(r => r.json())
      .then(goals => {
        console.log('d')
        dispatch({type: "POST_GOALS", payload: goals})})
    }
  }