import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionCard from './TransactionCard'

class Search extends Component {

        state = {
            searchTerm: ''
        }


    handleSearchChange = event => {
        // debugger
        this.setState({ searchTerm: event.target.value })
    }

    render() {

        const filteredTrans = this.props.transactions.filter(t =>
            t.date.includes(this.state.searchTerm)
        )

          const newList = filteredTrans.map(t => <TransactionCard key={t.id} {...t}  />)


        return (
            <div>
                Search by Date (MM/DD/YY): <input className="search-prompt" type="text" name="search" onChange={this.handleSearchChange} placeholder="Search..." />
                {newList}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

export default connect(mapStateToProps)(Search)

