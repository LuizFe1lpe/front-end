import './MainPage.css';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainPage = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        console.log(`Estou aqui`);
        console.log(clientes);
    })

    useEffect(() => {
        carregarDados();
    }, [])

    const carregarDados = async() => {
        const response = await axios.get(`http://localhost:3001/cliente`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(`Deu erro ao capturar valores`);
                console.log(err);
            });

        setClientes(response);
    }

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
                    {/** Fim da navegação */}

                </div>
                <table>
                    <thead>
                        <td>Nome</td>
                        <td>Celular</td>
                        <td>CPF</td>
                        <td>e-mail</td>
                    </thead>   
                    <tbody>
                        {   
                            clientes.map((cliente, indice) => {
                                if(cliente.nome === "")
                                    return <></>
                                return(
                                    <tr key={indice}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.telefone}</td>
                                        <td>{cliente.documento}</td>
                                        <td>{cliente.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
export default MainPage;