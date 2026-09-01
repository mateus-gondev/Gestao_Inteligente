import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/components_css/sidebar.css";

import Inicio from "../assets/icons/inicio.png";
import Reserva from "../assets/icons/reserva.png";
import Notebook from "../assets/icons/notebook.png";
import Usuario from "../assets/icons/usuario.png";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h2>Gestão Inteligente</h2>

            <nav>
                <ul>

                    <li>                        
                        <NavLink to="/home" end>                    
                            <img src={Inicio} alt="Home" className="icone-side" />
                            Início
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink to="/home/reservas">
                            <img src={Reserva} alt="Reserva" className="icone-side" />
                            Reservas
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/home/equipamentos">
                            <img src={Notebook} alt="Notebook" className="icone-side" />
                            Equipamentos
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink to="/home/usuarios">
                            <img src={Usuario} alt="Usuario" className="icone-side" />
                            Usuários
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;