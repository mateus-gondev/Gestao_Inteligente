import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Header from "../../components/header";

import "../../assets/css/home_css/home.css";


function Home() {

    return (

        <div className="wrapper-home">

            {/*Sidebar Lateral*/}
            <Sidebar />

            <main className="container">

                {/*Cabeçalho com Nome usuário + Foto Perfil*/}
                <Header />

                <section className="conteudo-home">

                    {/*Conteúdo da MAIN*/}
                    <Outlet />

                </section>
            </main>
        </div>

    );
}


export default Home;