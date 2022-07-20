import React from "react";
import Details from "./Details"

function Hog({ hogData, handleUpdate }) {


    function handleClick(event) {
        handleUpdate(event.target.parentNode.id)

    }

    return (
        <div onClick={handleClick} id={hogData.name}>
            <h2>{hogData.name}</h2>
            <img src={hogData.image}
                 alt="pig pic"
                 /> 
            {hogData.toggle? <Details data={hogData} /> : ""}
        </div>
    )
}

export default Hog; 