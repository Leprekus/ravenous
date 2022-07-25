import React from 'react';
import './SearchBar.css';

//should follow:
//formatting conventions
//naming conventions

const sortByOptions = {
    'bestMatch': 'best_match',
    'highestRated': 'rating',
    'mostReviewed': 'review_count',
}

class SearchBar extends React.Component {
    renderSortByOptions = () => {
        const options = Object.keys(sortByOptions).map((value) => {
            let key = value;
            return <li key={key}>{value}</li>
        });
        return options
    };
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar