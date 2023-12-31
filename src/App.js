import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
