import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';
import Colors from './Colors';

function App() {
  return (
    <Routes>
      <Route path="/colors/:color" element={<ColorDetails />} />  
      <Route path="/colorform" element={<ColorForm />} />  
      <Route path="*" element={<Colors />} />  
    </Routes>
  );
}

export default App;
