import React from 'react';
import './FormClientes.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class FormClientes extends React.Component {

  constructor(props){
    super(props);

    this.state={
      nome: "",
      telefone: "",
      documento:"",
      email:""
    }
  }

  setNome(e){
    this.setState({
      nome: e.target.value
    })
  }

  setTelefone(e){
    this.setState({
      telefone: e.target.value
    })
  }

  setCpf(e){
    this.setState({
      documento: e.target.value
    })
  }

  setEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  async sendData(){

    await axios.post(`http://localhost:3001/cliente`, this.state)
      .then(data => {
        console.log(`Deu Bom aqui`);
        console.log(data);
      })
      .catch(erro => {
        console.log(this.state);
        console.log(`Deu ruim aqui`);
        console.log(erro);
      });

    window.location.replace('http://localhost:3000/MainPAge');
  }

  render() {
    return (
      <form>
        <div className="crud_cliente">
          <div className="crud_column">
            <label for="nome">Nome</label>
            <label for="telefone">Telefone</label>
            <label for="cpf">CPF</label>
            <label for="email">E-mail</label>
          </div>
          <div className="crud_column">
            <input id="nome" type="text" onChange={(e) => this.setNome(e)} value={this.state.nome}/>
            <input id="telefone" type="phone" onChange={(e) => this.setTelefone(e)} placeholder="(00)00000-0000"/>
            <input id="cpf" type="text" onChange={(e) => this.setCpf(e)} placeholder="000.000.000-00"/>
            <input id="email" type="e-mail" onChange={(e) => this.setEmail(e)} placeholder="exemplo@dominio.com"/>
          </div>
        </div>
            <div className="crud_cliente_buttons">
              <button type='button' className="btnfinalizar" onClick={() => this.sendData()}>Finalizar Cadastro</button>
              <button className="btncancelar">
                <Link to="/mainpage">
                  Cancelar
                </Link>
              </button>
          </div>
      </form>
    );
  }
}

