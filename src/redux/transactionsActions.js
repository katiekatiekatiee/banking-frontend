// export const postTransactions = (transactions) => ({type: "POST_TRANSACTIONS", payload: transactions})
//DISPATCH -> THUNK


export const postTransactions = () => {
    return (dispatch) => {                              
      fetch("http://localhost:3000/transactions")
      .then(r => r.json())
      .then(transactions => dispatch({type: "POST_TRANSACTIONS", payload: transactions}))
    }
  }

export const addTransaction = (trans) => {
    return (dispatch) => {
      fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(trans)
      })
      .then(r => r.json())
      .then(transaction => dispatch({type: "ADD_TRANSACTION", payload: transaction}))
    }
  }

  export const deleteTransaction = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/transactions/${id}`, {
        method: "DELETE"
      })
      .then(r => r.json())
      .then(transId => dispatch({type: "DELETE_TRANSACTION", payload: transId}))
    }
  }