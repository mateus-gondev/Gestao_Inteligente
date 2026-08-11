import { useState, useEffect, useRef } from 'react';

import "../../assets/css/home_css/home.css";
import iconNotifica from '../../assets/icons/notifica.png';

function Home(){

    const [chatAberto, setChatAberto] = useState(false);
    const chatRef = useRef(null);

    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);

    // Alterna o estado do menu (abre/fecha) ao clicar na foto
    const alteraChat =() => {
        setChatAberto(!chatAberto);
    };

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    // Fecha o menu automaticamente se o usuário clicar fora dele
    useEffect(() => {
        const clicarFora = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) || chatRef.current && !chatRef.current.contains(event.target)) {
                setMenuAberto(false);
                setChatAberto(false);
            }
        };

        document.addEventListener('mousedown', clicarFora);
            return () => document.removeEventListener('mousedown', clicarFora);
        }, []);

    //TODO Simular usuário Mateus logado
    const usuarioNome = "Mateus"; 
    const primeiraLetra = usuarioNome ? usuarioNome.charAt(0).toUpperCase() : 'M';

    return (
        <div className="wrapper-home">
            <anside className="sidebar">
                <h2>Gestão Inteligente</h2>
                <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Reservas</a></li>
                        <li><a href="#">Equipamentos</a></li>
                        <li><a href="#">Usuários</a></li>
                    </ul>
                </nav>
            </anside>

            <main className="container">
                <nav className="container-nav">
                    <h1>Olá Usuário, seja bem vindo!</h1>
                    <p>Projeto em desenvolvimento</p>
                
                    <div className="container-notifica">
                        {/* Icone de Notificação*/}
                        <div className="icoin-notifica" onClick={alteraChat}>
                            <img src={iconNotifica} alt="icon" className="icon-sinho" />
                        </div>

                        
                            {chatAberto && (
                                <div className="chat-menu">
                                    <p>Chat</p>
                                </div>
                            )}
                    </div>

                    <div className="perfil-container" ref={menuRef}>
                        {/* Botão com a foto de perfil */}
                        <div className="perfil-avatar" onClick={alternarMenu}>
                            {primeiraLetra}
                        </div>

                        {/* Menu renderizado condicionalmente se estiver aberto */}
                        {menuAberto && (
                            <div className="perfil-menu">
                                <a href="#perfil" onClick={() => setMenuAberto(false)}>Meu Perfil</a>
                                <a href="#config" onClick={() => setMenuAberto(false)}>Configurações</a>
                                <hr />
                                <a href="/" className="logout" onClick={() => setMenuAberto(false)}>Sair</a>
                            </div>
                        )}
                    </div>
                </nav>    
            </main>
        </div>
    );
}

export default Home;

