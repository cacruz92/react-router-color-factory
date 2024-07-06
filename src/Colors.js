import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";

const Colors = () => {
    const INITIAL_STATE = [
        {id: 1, name: "Blue", code:"#0000FF"},
        {id: 2, name: "Green", code:"#008000"},
        {id: 3, name: "Orange", code: "#FFA500"}
    ]
    const [colors, setColors] = useState(INITIAL_STATE);
    const addColor = (newColor) => {
        setColors(colors => [...colors, {...newColor, id: uuid()}])
    }

    return (
        <div>
            <Link to={'/ColorForm'} addColor={addColor}> Add a Color! </Link>
        </div>
    )
}

export default Colors;