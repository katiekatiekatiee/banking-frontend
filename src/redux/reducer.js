function reducer(state = {goals: [], transactions: []}, action) {
    switch(action.type) {
        case "POST_TRANSACTIONS":
            return{
                ...state,
                transactions: action.payload
            };

        // break;
        default:
            return state;
    }
}

export default reducer;

