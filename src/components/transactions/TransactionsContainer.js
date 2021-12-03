import React, { Component } from 'react'

export default class TransactionsContainer extends Component {

    componentDidMount(){
        fetch("http://localhost:3000/transactions")
        .then(r => r.json())
        .then(data => console.log(data))
    }

    render(){
        return (
            <div>
                Transactions Go Here!
            </div>
        )
    }
   
}
