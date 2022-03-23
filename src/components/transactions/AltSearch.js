import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchTransactions } from '../../redux/transactionsActions'

class altSearch extends Component {
    state = {
        searchTerm: ''
    }

    render() {
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Enter Date to Search: </label>
                <input type="text" placeholder="Search..." name="search"/>
            </form>
        </div>
    }
}