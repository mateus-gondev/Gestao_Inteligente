import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../../assets/css/login_css/cadastro.css";
import bannerCadastro from "../../assets/imgs/BannerCadastro.png";
import logoReseti from "../../assets/imgs/LogoReseti.png";

function Cadastro() {
  const location = useLocation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const enterClass =
    location.state?.from === "/"
      ? "auth-enter-from-right"
      : "auth-enter-initial";

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, senha });
  }

  return (
    <div className={`cadastro-container ${enterClass}`}>

      <main className="cadastro-form-wrapper">

        <header className="cadastro-header">
          <div className="cadastro-logo">
            <img src={logoReseti} alt="Logo Reseti" />
            <h1>CADASTRE-SE</h1>
          </div>

          <p className="cadastro-subtitle">
            CRIE UMA CONTA PARA ACESSAR O SISTEMA
          </p>
        </header>

        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoComplete="name"
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <div className="senha-wrapper">
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="toggle-senha"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            >
              {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          <button type="submit" className="btn-entrar">
            Cadastrar
          </button>

        </form>

        <p className="login-footer">
            Já possui uma conta?
            <Link to="/" state={{ from: location.pathname }}>
              {" "}
              Entrar
            </Link>
        </p>
        

      </main>

      <aside className="cadastro-banner" aria-hidden="true">
        <img src={bannerCadastro} alt="" />
      </aside>

    </div>
  );
}

export default Cadastro;
