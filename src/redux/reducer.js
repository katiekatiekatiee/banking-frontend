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
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
                
            };
        case "DELETE_TRANSACTION":
            const newTransactionList = state.transactions.filter(t => t.id !== action.payload)

            return {
                ...state,
                transactions: newTransactionList
            };
       
        // break;
        default:
            return state;
    }
}

export default reducer;
