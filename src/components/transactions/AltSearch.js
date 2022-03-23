import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchTransactions } from '../../redux/transactionsActions'

class AltSearch extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = () => {

    }

    handleSubmit = () => {
        
    }


    render() {
        return(
        <div>
            
            <form onSubmit={this.handleSubmit}>
                <label>Enter Date to Search: </label>
                <input type="text" placeholder="Search..." name="search" onChange={this.handleChange} value={this.state.searchTerm}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
        )}
}

export default connect(null, {searchTransactions})(AltSearch)

