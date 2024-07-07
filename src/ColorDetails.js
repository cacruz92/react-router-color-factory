import React from "react";
import {Link, useParams} from "react-router-dom"

const ColorDetails = () => {
    
    const {color, code} = useParams();
    console.log('Params from URL:', color, code);

    return(
        <div className="color-details" style={{ backgroundColor: `${code}`, color: 'white'}}
>
            <h1> This is {color}!</h1>
            <h1> Isn't it Beautiful</h1>
            <Link to={'/'}><h1> Return!</h1></Link>
        </div>
        )
}

export default ColorDetails;