import React from 'react';


class SearchBar extends React.Component {

    state = {value: ''};

    onChange = event => {
        this.setState({value: event.target.value})
    };

    onSubmit = event => {

        event.preventDefault();

        this.props.onFormSearch(this.state.value);

    };

    render() {
        return (<div className="ui segment search-bar padded raised">
            <form onSubmit={this.onSubmit} className='ui form'>
                <div className="field">
                    <label htmlFor="search">Search: </label>
                    <input value={this.state.value} type="text" name="search"
                           onChange={this.onChange}/>
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;
