import NavBar from './NavBar'
import React, { Component } from 'react'
import TransactionsSum from './transactions/TransactionsSum'


export default class Displays extends Component {
    render() {
        return (
            <div>
                <TransactionsSum />
                <NavBar />
            </div>
        )
    }
}




