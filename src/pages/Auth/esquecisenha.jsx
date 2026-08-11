import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../assets/css/login_css/esquecisenha.css";
import logoReseti from "../../assets/imgs/LogoReseti.png";

function Esqueci(){
    const location = useLocation();
    const [email, setEmail] = useState("");

    const enterClass = 
        location.state?.from === "/esqueci"
        ? "auth-enter-from-left"
        : "auth-enter-initial";

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ email });
    }   

    return (
        <div className={`esqueci-container ${enterClass}`}>
            <main className="esqueci-form-wrapper">
                <header className="esqueci-header">
                    <div className="esqueci-logo">
                        <img src={logoReseti} alt="Logo Reseti" />
                        <h1>RESETE DE SENHA</h1>
                    </div>
                    <p className="esqueci-subtitle">
                        ADICIONE UM E-MAIL JÁ CADASTRADO PARA RECEBER  AS ORIENTAÇÕES DE MUDANÇA DE SENHA
                    </p>
                </header>

                <form className="esqueci-form" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />

                    <button 
                        type="submit" 
                        className="btn-entrar">
                        Enviar
                    </button>
                </form>

                <p className="esqueci-footer">
                    Já possui uma conta?
                    <Link to="/" state={{ from: location.pathname }}>
                    {" "}
                    Realizar Login
                    </Link>
                </p>
            </main>
        </div>
    );

}

export default Esqueci;