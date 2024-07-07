import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link} from 'react-router-dom';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';
import Colors from './Colors';
import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function App() {

  const INITIAL_STATE = [
    {id: 1, color: "Blue", code:"#0000FF"},
    {id: 2, color: "Green", code:"#008000"},
    {id: 3, color: "Orange", code: "#FFA500"}
]
const [colors, setColors] = useState(INITIAL_STATE);
const addColor = (newColor) => {
    setColors(colors => [...colors, {...newColor, id: uuid()}])
}
  console.log('Rendering App component...');
  return (
    
    <Routes>
      <Route path="/" element={<Colors colors={colors} />} />
      
      <Route path="/:color/:code" element={<ColorDetails />} />  
      <Route path="/colorform" element={<ColorForm colors={colors} addColor={addColor}/>} />  
      
      <Route path="*" element={<Colors colors={colors} />} />
    </Routes>
  );
}

export default App;
