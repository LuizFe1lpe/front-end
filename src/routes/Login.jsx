import React from "react";
import './Login.css'

const Login = () => {
    return (
        <body>
            <div class="login">
                <div class="login-coluna-esquerda">
                    <p class="titulo">TED's</p>
                    <p class="subtitulo">Presentes Criativos</p>
                </div>
                <div class="login-coluna-direita">
                    <p class="login-titulo">Login</p>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="exemplo@gmail.com"/>
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="*********"/>
                    <button>Entrar</button>
                    <a href="none">Dificuldades com o login?</a>
                </div>
            </div>
        </body>
    )
}
export default Login;