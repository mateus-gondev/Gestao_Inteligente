import { useState } from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../../assets/css/login_css/cadastro.css";
import bannerCadastro from "../../assets/imgs/BannerCadastro.png";
import logoReseti from "../../assets/imgs/LogoReseti.png";

import API_ROUTES from "../../services/api";

function Cadastro() {
  const location = useLocation();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [setor_curso, setSetor_curso] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Estados - Constantes para o processo de cadastro e retorno do cadastro do usuário
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  // Mudança de tela
  const enterClass =
    location.state?.from === "/"
      ? "auth-enter-from-right"
      : "auth-enter-initial";

  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Função para enviar o json do formulario para o backend
  async function handleSubmit(e) {
      e.preventDefault();

      // Evita múltiplos envios do formulario
      if (isSubmitting) {
          return;
      }

      const emailFormatado = email.trim();

      // Validação do email
      if (!emailValido(emailFormatado)) {
        setMensagem(
            "Digite um email válido. Exemplo: nome@dominio.com"
        );
        setTipoMensagem("erro");
        return;
      }

      setIsSubmitting(true);
      setMensagem("");
      setTipoMensagem("");


      try {
          const response = await fetch(`${API_ROUTES.usuarios}/`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  nome,
                  email: emailFormatado,
                  setor_curso,
                  senha
              })
          });

          const data = await response.json();

          if (!response.ok) {
            setMensagem(data.erro || "Não foi possível realizar o cadastro.");
            setTipoMensagem("erro");

            setIsSubmitting(false);
            return;
          }

          // Cadastro realizado
          setMensagem("Usuário cadastrado com sucesso!");
          setTipoMensagem("sucesso");

          // Aguarda um pouco para o usuário visualizar a mensagem
          setTimeout(() => {
              navigate("/");
          }, 1600);

          } catch (error) {
            console.error("Erro ao conectar com o backend:", error);

            setMensagem("Não foi possível conectar ao servidor.");
            setTipoMensagem("erro");

            setIsSubmitting(false);
          }
  }
  //

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

        {/* Mensagem de criação! */}
        {mensagem && (
            <div className={`cadastro-alert ${tipoMensagem}`}>
                {mensagem}
            </div>
        )}

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

          <input
            type="text"
            placeholder="Setor ou Curso"
            value={setor_curso}
            onChange={(e) => setSetor_curso(e.target.value)}
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

          <button 
            type="submit" 
            className="btn-entrar"
            disabled={isSubmitting}
            >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
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
