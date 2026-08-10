import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../../assets/css/login.css";
import bannerLogin from "../../assets/imgs/BannerLogin.png";
import logoReseti from "../../assets/imgs/LogoReseti.png";

function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarMe, setLembrarMe] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const enterClass =
    location.state?.from === "/cadastro"
      ? "auth-enter-from-left"
      : "auth-enter-initial";

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, senha, lembrarMe });
  }

  return (
    <div className={`login-container ${enterClass}`}>
      <aside className="login-banner" aria-hidden="true">
        <img src={bannerLogin} alt="" />
      </aside>

      <main className="login-form-wrapper">
        <header className="login-header">
          <div className="login-logo">
            <img src={logoReseti} alt="Logo Reseti" />
            <h1>BEM VINDO AO RESETI</h1>
          </div>

          <p className="login-subtitle">
            SISTEMA DE GERENCIAMENTO DE EQUIPAMENTOS E USUÁRIO
          </p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
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

          <div className="login-options">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={lembrarMe}
                onChange={(e) => setLembrarMe(e.target.checked)}
              />
              <span className="checkbox-mark" />
              Lembre-me
            </label>

            <a href="/esqueci" className="forgot-password">
              Esqueci minha senha
            </a>
          </div>

          <button type="submit" className="btn-entrar">
            Entrar
          </button>
        </form>

        <div className="container-p">
        <p className="login-footer">
          Não possui uma conta?
          <Link to="/cadastro" state={{ from: location.pathname }}>
            {" "}
            Cadastra-se
          </Link>
        </p>
        </div>

      </main>
    </div>
  );
}

export default Login;
