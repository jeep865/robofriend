import react from "react";

const SearchBox = ({ Searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder="search Robots" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;