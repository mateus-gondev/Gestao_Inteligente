
import "../../assets/css/home_css/home.css";

function Home(){
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
                    <div>
                        <ul className="exit">
                            <li><a className="cont-exit" href="/">Sair</a></li>
                        </ul>
                    </div>
                </nav>
            </anside>

            <main className="container">
                <h1>Olá Usuário, seja bem vindo!</h1>
                <p>Projeto em desenvolvimento</p>
            </main>
        </div>
    );
}

export default Home;

