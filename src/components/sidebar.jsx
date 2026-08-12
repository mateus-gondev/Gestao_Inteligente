import { NavLink } from "react-router-dom";
import "../assets/css/components_css/sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h2>Gestão Inteligente</h2>

            <nav>
                <ul>

                    <li>
                        <NavLink to="/home" end>
                            Início
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/home/reservas">
                            Reservas
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/home/equipamentos">
                            Equipamentos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/home/usuarios">
                            Usuários
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;