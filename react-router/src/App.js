import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from '../src/components/Home';
import Empresa from '../src/components/Empresa';
import Contato from './components/Contato';
import './App.css';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<NavBar />}>

          <Route index element={<Home />}/>
          <Route path='empresa' element={<Empresa />}/>
          <Route path='contato' element={<Contato />}/>

        </Route>

      </Routes>

    </BrowserRouter>
    
  );
}

export default App;