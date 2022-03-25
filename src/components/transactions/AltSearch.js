import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTransactions } from '../../redux/transactionsActions';

class AltSearch extends Component {
    
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            searchTerm: ''
         }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchTransactions(this.state.searchTerm)
    };


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
};

export default connect(null, {searchTransactions})(AltSearch);

