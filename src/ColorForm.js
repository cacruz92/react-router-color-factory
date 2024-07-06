import React, {useState} from "react";

const ColorForm = ({addColor}) => {
    const INITIAL_STATE = {}

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form className="color-form" onSubmit={handleSubmit}>
                <h2>Choose a new color and name it below</h2>
                
                <label htmlFor="color">Color: </label>
                <input 
                id="color" 
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="color-name">Color Name: </label>
                <input 
                id="color-name" 
                type="text"
                name="color-name"
                value={formData.colorName}
                onChange={handleChange}
                />
                <br></br>
                
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default ColorForm;