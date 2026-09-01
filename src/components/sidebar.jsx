import { useState } from "react"; 
import { NavLink } from "react-router-dom";
import "../assets/css/components_css/sidebar.css";

import Inicio from "../assets/icons/inicio.png";
import Reserva from "../assets/icons/reserva.png";
import Notebook from "../assets/icons/notebook.png";
import Usuario from "../assets/icons/usuario.png";

function Sidebar() {
    
    const [aberta, setAberta] = useState(true);

    return (
        <aside className={`sidebar ${aberta ? "" : "fechada"}`}>

            <div className="sidebar-header">
                {aberta && <h2>Gestão Inteligente</h2>}
                
                <button className="btn-hamburguer" onClick={() => setAberta(!aberta)}>
                    ☰
                </button>
            </div>

            <nav>
                <ul>
                    <li>                        
                        <NavLink to="/home" end>                    
                            <img src={Inicio} alt="Home" className="icone-side" />
                            {aberta && <span>Início</span>} 
                        </NavLink>
                    </li>
                    <li>                        
                        <NavLink to="/home/reservas">
                            <img src={Reserva} alt="Reserva" className="icone-side" />
                            {aberta && <span>Reservas</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/equipamentos">
                            <img src={Notebook} alt="Notebook" className="icone-side" />
                            {aberta && <span>Equipamentos</span>}
                        </NavLink>
                    </li>
                    <li>                        
                        <NavLink to="/home/usuarios">
                            <img src={Usuario} alt="Usuario" className="icone-side" />
                            {aberta && <span>Usuários</span>}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
