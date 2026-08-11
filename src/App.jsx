
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/login.jsx'
import Cadastro from './pages/Auth/cadastro.jsx'
import Esqueci from './pages/Auth/esquecisenha.jsx'
import Home from './pages/Home/home.jsx'

function App(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} /> 
            <Route path="/esqueci" element={<Esqueci />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}

export default App