import {Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/login";
import Cadastro from "./pages/Auth/cadastro";
import Esqueci from "./pages/Auth/esquecisenha";

import Home from "./pages/Home/home";
import Usuarios from "./pages/Home/usuarios";



function App() {

    return (
            <Routes>
                {/* AUTENTICAÇÃO */}
                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/cadastro"
                    element={<Cadastro />}
                />

                <Route
                    path="/esqueci"
                    element={<Esqueci />}
                />


                {/* SISTEMA */}
                <Route
                    path="/home"
                    element={<Home />}
                >

                    {/* Página inicial */}

                    <Route
                        index
                        element={
                            <div>
                                <h1>Início</h1>
                                <p>
                                    Bem-vindo ao Gestão Inteligente.
                                </p>
                            </div>
                        }
                    />

                    {/* Usuários */}
                    <Route
                        path="usuarios"
                        element={<Usuarios />}
                    />


                    {/* Futuramente */}
                    <Route
                        path="reservas"
                        element={
                            <div>
                                <h1>Reservas</h1>
                            </div>
                        }
                    />

                    <Route
                        path="equipamentos"
                        element={
                            <div>
                                <h1>Equipamentos</h1>
                            </div>
                        }
                    />

                </Route>
            </Routes>
        

    );
}

export default App;