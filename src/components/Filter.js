import React from "react";

function Filter({ onFilter, onSort }) {

    function handleFilter(e) {
        onFilter(e.target.id)
    }

    function handleSort(e) {
        onSort(e.target.id)
    }

    return(
        <div>
            <h2>What kind of Pigs do you want to see? </h2> 
            <button onClick={handleFilter} id="greasy"> Greasy </button>
            <button onClick={handleFilter} id="clean"> Clean </button>
            <button onClick={handleSort} id="name">Sort by Name</button>
            <button onClick={handleSort} id="weight">Sort by Weight</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default Filter; 