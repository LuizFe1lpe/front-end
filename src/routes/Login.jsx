import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div>
            <form class="login" onSubmit={handleSubmit}>
                <div class="login-coluna-esquerda">
                    <p class="titulo">TED's</p>
                    <p class="subtitulo">Presentes Criativos</p>
                </div>
                <div class="login-coluna-direita">
                    <p class="login-titulo">Login</p>
                    <label>E-mail</label>
                    <input type="email" id="email" name="email" placeholder="exemplo@gmail.com" />
                    <label>Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="*********" />
                    <button type="submit">Entrar</button>
                    <a href="none">Dificuldades com o login?</a>
                </div>
            </form>
        </div>
    )
}
const handleSubmit = (event) => {
    //evita reload da página
    event.preventDefault();

    var uname = event.target.email.value;
    var pass = event.target.senha.value;
    console.log("e-mail " + uname + " senha " + pass);

    if(uname == 'exemplo@gmail.com'){
        if(pass !== '123456'){
            console.log("Senha incorretos");
        }
        else{
            //trazer a página principal
            window.location.replace('http://localhost:3000/MainPAge');
        }
    }
    else{
        console.log("Usuário não encontrado");
    }
}
export default Login;