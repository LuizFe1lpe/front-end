import './MainPage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <><div class="container">
            <nav class="MenuLateral">
                <div class="login-coluna-esquerda">
                    <p class="titulo">TED's</p>
                    <p class="subtitulo">Presentes Criativos</p>
                </div>
                <di class="MenuLinks">
                    <a href="">CLIENTES</a>
                    <a href="">PRODUTOS</a>
                    <a href="">PEDIDOS</a>
                    <a href="">VENDEDORES</a>
                </di>
            </nav>
            <div class="workspace">
                <div class="workspace-buttons">
                    {/** Navegar para a página de cadastro */}
                    <button>
                        <Link to="/cadastrar">
                        +Cadastrar <br/> Novo Cliente
                        </Link>
                    </button>

                </div>
                <table>
                    <thead>
                        <td>Nome</td>
                        <td>Celular</td>
                        <td>CPF</td>
                        <td>e-mail</td>
                    </thead>   
                    <tbody>
                        <td>Exemplo</td>
                        <td>(00)00000-0000</td>
                        <td>123.456.789-00</td>
                        <td>nome@gmail.com</td>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
export default MainPage;