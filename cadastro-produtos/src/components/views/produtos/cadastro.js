import React from "react";
import ProdutoService from "../../../app/produtoService";

const estadoInicial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
  errors: []
};

class CadastroProduto extends React.Component {
  state = estadoInicial;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = event => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmit = event => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor
    };

    try {
      this.service.salvar(produto);
      this.limpaCampos();
      this.setState({ sucesso: true });
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
  };

  limpaCampos = () => {
    this.setState(estadoInicial);
  };

  render() {
    return (
      <div className='card'>
        <div className='card-header'>Cadastro de Produtos</div>
        <div className='card-body'>
          {this.state.sucesso && (
            <div class='alert alert-dismissible alert-success'>
              <button type='button' class='close' data-dismiss='alert'>
                &times;
              </button>
              <strong> Bem feito! </strong>
              <a href='#' class='alert-link' />
              Cadastro Realizado com sucesso!.
            </div>
          )}

          {this.state.errors.length > 0 &&
            this.state.errors.map(msg => {
              return (
                <div class='alert alert-dismissible alert-danger'>
                  <button type='button' class='close' data-dismiss='alert'>
                    &times;
                  </button>
                  <strong> Erro! </strong>
                  <a href='#' class='alert-link' />
                  {msg}
                </div>
              );
            })}

          <div className=' row'>
            <div className='col-md-6'>
              <div className='from-group'>
                <label>Nome:</label>
                <input
                  name='nome'
                  onChange={this.onChange}
                  type='text'
                  value={this.state.nome}
                  className='form-control'
                />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='from-group'>
                <label>SKU:</label>
                <input
                  name='sku'
                  onChange={this.onChange}
                  type='text'
                  value={this.state.sku}
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label>Descrição:</label>
                <textarea
                  name='descricao'
                  onChange={this.onChange}
                  value={this.state.descricao}
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className=' row'>
            <div className='col-md-6'>
              <div className='from-group'>
                <label>Preço:</label>
                <input
                  name='preco'
                  onChange={this.onChange}
                  value={this.state.preco}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='from-group'>
                <label>Fornecedor:</label>
                <input
                  name='fornecedor'
                  onChange={this.onChange}
                  value={this.state.fornecedor}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row '>
            <div className='col-md-1'>
              <button onClick={this.onSubmit} className='btn btn-success'>
                Salvar
              </button>
            </div>

            <div className='col-md-1'>
              <button onClick={this.limpaCampos} className='btn btn-primary'>
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;
