import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }


    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    onKeyPress={event => this.onKeyPress(event)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
    }

    onKeyPress(e) {
        if(e.key === 'Enter') {
            this.props.onSearchTermChange(this.state.term);
        }
    }
}

export default SearchBar;