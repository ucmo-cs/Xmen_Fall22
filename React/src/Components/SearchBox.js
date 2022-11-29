import React from "react";

const SearchBox = (props) => {
    return(
        <input type='search'
         className='search-bar'
         placeholder={props.placeholder}
        />
    )
}

export default SearchBox;