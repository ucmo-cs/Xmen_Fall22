import React, { useState } from 'react';
import SearchBox from "../Components/SearchBox";

function Location(){

    const [searchField, setSearch] = useState("");

    return (
        <div className="location">
            <h2>Please pick one of our locations</h2>
            <SearchBox placeholder="Search Location" handleChange={(e) => setSearch({searchField:e.target.value})}/>
        </div>
    );
}

export default Location;