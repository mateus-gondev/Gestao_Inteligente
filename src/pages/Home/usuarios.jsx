import { useEffect, useState } from "react";

import API_ROUTES from "../../services/api";
import "../../assets/css/home_css/usuarios.css";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                setCarregando(true);

                const response = await fetch(API_ROUTES.usuarios);

                if (!response.ok) {
                    throw new Error("Não foi possível carregar os usuários.");
                }

                const data = await response.json();

                setUsuarios(data);

            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                setErro(error.message);

            } finally {
                setCarregando(false);
            }
        };

        buscarUsuarios();
    }, []);

    return (
        <div className="pagina-usuarios">
            <div className="usuarios-header">
                <div>
                    <h1>Usuários</h1>
                    <p>Gerenciamento de usuários do sistema.</p>
                </div>
            </div>

        {/* NOVO USUÁRIO */}
        <button className="btn-novo-usuario">+ Novo usuário</button>

        {/* BARRA DE PESQUISA */}
        {!carregando && !erro && (
            <div className="usuarios-ferramentas">
                <div className="campo-pesquisa">
                    <span className="icone-pesquisa">🔎</span>

                    <input type="text" placeholder="Pesquisar usuário..." />
                </div>

                <span className="contador-usuarios">
                    {usuarios.length} usuário
                    {usuarios.length !== 1 ? "s" : ""}
                </span>
            </div>
        )}

        {/* CARREGANDO */}
        {carregando && <p>Carregando usuários...</p>}

        {/* ERRO */}
        {erro && <p className="mensagem-erro">Erro: {erro}</p>}

        {/* TABELA */}
        {!carregando && !erro && (
            <div className="tabela-container">
                <table className="tabela-usuarios">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Setor / Curso</th>
                            <th>Permissão</th>
                            <th>Status</th>
                            <th className="coluna-acoes">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((usuario) => (
                                <tr key={usuario.id_usuario}>
                                    <td className="usuario-id">
                                        #{String(usuario.id_usuario).padStart(2, "0")}
                                    </td>
                                    <td className="usuario-nome">{usuario.nome}</td>
                                    <td className="usuario-email">{usuario.email}</td>
                                    <td>{usuario.setor_curso || "-"}</td>
                                    <td>
                                        <span className="badge-permissao">
                                            {usuario.permissao}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className={
                                                usuario.status?.toLowerCase() === "ativo"
                                                    ? "status ativo"
                                                    : "status"
                                                }
                                        >
                                            <span className="status-ponto"></span>

                                            {usuario.status}
                                        </span>
                                    </td>
                                    <td className="coluna-acoes">
                                        <div className="acoes-usuario">
                                            <button
                                                className="btn-acao btn-editar"
                                                title="Editar usuário"
                                                >
                                                ✎  
                                            </button>

                                            <button
                                                className="btn-acao btn-remover"
                                                title="Remover usuário"
                                                >
                                                🗑
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="nenhum-usuario">
                                    Nenhum usuário encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )}
        </div>
    );
}

export default Usuarios;
