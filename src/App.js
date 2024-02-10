import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
