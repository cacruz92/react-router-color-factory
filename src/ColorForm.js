import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({addColor}) => {
    const INITIAL_STATE = {
        code: '#000000',
        color:''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        history.push('/colors');
    }

    return (
        <div>
            <form className="color-form" onSubmit={handleSubmit}>
                <h2>Choose a new color and name it below</h2>
                
                <label htmlFor="code">Color: </label>
                <input 
                id="code" 
                type="color"
                name="code"
                value={formData.code}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="color">Color Name: </label>
                <input 
                id="color" 
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                />
                <br></br>
                
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default ColorForm;