import React from 'react';
import '../componentes/form-clientes.css';

export default class App extends React.Component {
  render() {
    return (
      <form>
        <div class="crud_cliente">
          <div class="crud_column">
            <label for="nome">Nome</label>
            <label for="telefone">Telefone</label>
            <label for="cpf">CPF</label>
            <label for="email">E-mail</label>
          </div>
          <div class="crud_column">
            <input id="nome" type="text"/>
            <input id="telefone" type="phone" placeholder="(00)00000-0000"/>
            <input id="cpf" type="text" placeholder="000.000.000-00"/>
            <input id="email" type="e-mail" placeholder="exemplo@dominio.com"/>
          </div>
        </div>
            <div class="crud_cliente_buttons">
              <button class="btnfinalizar">Finalizar <br/> Cadastro</button>
              <button class="btncancelar">Cancelar</button>
          </div>
      </form>
    );
  }
}
