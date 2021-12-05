function reducer(state = {goals: [], transactions: []}, action) {
    switch(action.type) {
        case "POST_TRANSACTIONS":
            return{
                ...state,
                transactions: action.payload
            };
        case "POST_GOALS":
            return{
                ...state, 
                goals: action.payload
            };

        // break;
        default:
            return state;
    }
}

export default reducer;

