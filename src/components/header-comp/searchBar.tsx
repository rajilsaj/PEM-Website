
import React, {Component} from 'react';

interface SearchFormState{

}

class SearchBar extends Component<{}, SearchFormState> {
    render() {
        return (
            <div className="">
                <input placeholder="what's you looking for ?" />
            </div>
        );
    }
}

export default SearchBar;