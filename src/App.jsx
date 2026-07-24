
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/login.jsx'
import Cadastro from './pages/Cadastro/cadastro.jsx'

function App(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} /> 
        </Routes>
    )
}

export default App