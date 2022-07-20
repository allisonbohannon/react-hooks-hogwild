import React from "react";

function Details({ data }) {
    return (
        <div>
            <p><strong>Specialty:</strong> {data.specialty}</p>
            <p><strong>Weight:</strong> {data.weight}</p>
            <p><strong>Greased:</strong>  {data.greased? "Yes" : "No"}</p>
            <p><strong>Highest Medal Achieved:</strong> {data["highest medal achieved"]} </p>
            <br></br>
        </div>
    )
}

export default Details; 