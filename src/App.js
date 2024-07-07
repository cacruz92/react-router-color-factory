import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';
import Colors from './Colors';

function App() {
  console.log('Rendering App component...');
  return (
    <Routes>
      <Route path="/:color/:code" element={<ColorDetails />} />  
      <Route path="/colorform" element={<ColorForm />} />  
      <Route path="*" element={<Colors />} />  
    </Routes>
  );
}

export default App;
