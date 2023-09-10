import React from 'react';

const Navbar = ({ handleNextQuery }) => {
    return (
        <header className="header">
            <h1 className="brand">
                <em>Fetching Data from API</em>
            </h1>
            <button className="btn" onClick={handleNextQuery} >
                <em>Fetch Data</em>
            </button>
        </header>
    )
}

export default Navbar;