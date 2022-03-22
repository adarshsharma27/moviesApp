import React from "react";
const Search = ({ setSearch }) => {
    return (
        <>
            <div className="form py-4 bg-light">
                <div className="form-container w-50 mx-auto">
                    <input type="search" className="form-control   mx-auto" placeholder="search" id="search" onInput={(event) => setSearch(event.target.value)} />
                </div>
            </div>
        </>
    );
};

export default Search;
