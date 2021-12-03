// export const postTransactions = (transactions) => ({type: "POST_TRANSACTIONS", payload: transactions})

export const postTransactions = () => {
    return (dispatch) => {
      fetch("http://localhost:3000/transactions")
      .then(r => r.json())
      .then(transactions => dispatch({type: "POST_TRANSACTIONS", payload: transactions}))
    }
  }