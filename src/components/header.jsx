import { useState, useEffect, useRef } from "react";

import "../assets/css/components_css/header.css";

import iconNotifica from "../assets/icons/notifica.png";

function Header() {
    const [chatAberto, setChatAberto] = useState(false);
    const chatRef = useRef(null);

    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);

  // Futuramente virá do usuário logado
    const usuarioNome = "Mateus";

    const primeiraLetra = usuarioNome ? usuarioNome.charAt(0).toUpperCase() : "M";

    // Abre/fecha notificações
    const alteraChat = () => {
        setChatAberto(!chatAberto);
        setMenuAberto(false);
    };

    // Abre/fecha menu do perfil
    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
        setChatAberto(false);
    };

  // Fecha os menus ao clicar fora
    useEffect(() => {
        const clicarFora = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuAberto(false);
        }

        if (chatRef.current && !chatRef.current.contains(event.target)) {
            setChatAberto(false);
        }
        };

        document.addEventListener("mousedown", clicarFora);

        return () => {
        document.removeEventListener("mousedown", clicarFora);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-titulo">
                <h1>Olá {usuarioNome}, seja bem vindo!</h1>

                <p>Projeto em desenvolvimento</p>
            </div>

            <div className="header-acoes">
                {/* NOTIFICAÇÕES */}

                <div className="container-notifica" ref={chatRef}>
                    <div className="icoin-notifica" onClick={alteraChat}>
                        <img src={iconNotifica} alt="Notificações" className="icon-sinho" />
                    </div>

                    {chatAberto && (
                        <div className="chat-menu">
                        <p>Notificações</p>
                        </div>
                    )}
                </div>

                {/* PERFIL */}

                <div className="perfil-container" ref={menuRef}>
                    <div className="perfil-avatar" onClick={alternarMenu}>
                        {primeiraLetra}
                    </div>

                    {menuAberto && (
                        <div className="perfil-menu">
                        <a href="#perfil" onClick={() => setMenuAberto(false)}>
                            Meu Perfil
                        </a>

                        <a href="#config" onClick={() => setMenuAberto(false)}>
                            Configurações
                        </a>

                        <hr />

                        <a
                            href="/"
                            className="logout"
                            onClick={() => setMenuAberto(false)}
                        >
                            Sair
                        </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
