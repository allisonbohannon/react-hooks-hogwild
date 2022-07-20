import React from "react"; 
import Hog from "./Hog"

function Hogs( {hogsData, onUpdate}) {
    console.log(hogsData)


    const hogDisplay = hogsData.map(hog => {
        return(
            <Hog key={hog.name} hogData={hog} handleUpdate={onUpdate} />
        )
    })
    return(
        <div>{hogDisplay}</div>
    )
}

export default Hogs; 