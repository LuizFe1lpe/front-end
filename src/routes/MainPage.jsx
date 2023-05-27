import './MainPage.css';
import FormClientes from '../componentes/form-clientes';

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
                    <button>+Cadastrar <br/> Novo Cliente</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default MainPage;