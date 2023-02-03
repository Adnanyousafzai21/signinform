import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Signup/>}/>
    <Route path='/login'element={<Login/>}/>
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
