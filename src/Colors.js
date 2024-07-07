import React, {useState} from "react";

import { Link } from "react-router-dom";
import ColorForm from "./ColorForm";

const Colors = ({colors}) => {
    // const INITIAL_STATE = [
    //     {id: 1, color: "Blue", code:"#0000FF"},
    //     {id: 2, color: "Green", code:"#008000"},
    //     {id: 3, color: "Orange", code: "#FFA500"}
    // ]
    // const [colors, setColors] = useState(INITIAL_STATE);
    // const addColor = (newColor) => {
    //     setColors(colors => [...colors, {...newColor, id: uuid()}])
    // }
    // console.log('Current colors state:', colors);

    return (
        <div>
            {colors.map(({ id, color, code }) => (
                <React.Fragment key={id}>
                    <Link to={`/colors/${color.toLowerCase()}/${code}`} id={code}>{color}</Link>
                    <br></br>
                </React.Fragment>
            ))}
            <Link to="/colorform">Add a Color!</Link>
            {/* <ColorForm addColor={addColor}/> */}
        </div>
    )
}

export default Colors;