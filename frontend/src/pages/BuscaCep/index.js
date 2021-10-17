import React, { Component } from 'react';


import api from '../../services/api';

import { Container, Erro, Form, Address, ProgressBar } from './styles';

class BuscaCep extends Component {

	constructor(props) {
		super(props);

		/*Fazendo a bind para que o 'this' usado nas funções façam referencia a classe*/
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChangeCep = this.onChangeCep.bind(this);

		this.state = {
			cep: '',
			isCached: '',
			address: '',
			error: '',
			isLoading: false
		}
	}

	componentDidMount(){
		//Alterando o título da página no momento que o component montar
		document.title = 'Pet-CEP';
	}

	//Função utilizada para sobrescer o script default do Formulário
	handleSubmit(e) {
		e.preventDefault();

		this.setState({
			address: null,
			isCached: null,
			error: null,
			isLoading: true
		});

		api.post("/cep/search", {cep: this.state.cep})
			.then(response => {
				if(response?.data?.address) {
					this.setState({address: response.data.address});
				}
				if(response?.data?.isCached) {
					this.setState({isCached: response.data.isCached});
				}
				if(response?.data?.message) {
					this.setState({error: response.data.message});
				}
			})
			.catch(error => {
				if(error?.response?.data?.message) {
					this.setState({error: error.response.data.message});
				} else {
					this.setState({error: error.message});
				}
			})
			.finally(() => {
				this.setState({
					isLoading: false
				});
			});
	};

	//Função utilizada no onChange do Formulário para alterar o valor do state.cep
	onChangeCep(e) {
		this.setState({
			cep: e.target.value
		})
	}

	render() {
		return (
			<Container>
				<h1>Pesquisar Cep</h1>

				{(this.state.error) && 
                    <Erro>{this.state.error}</Erro>
                }

				<Form onSubmit={this.handleSubmit}>
					<input type='text'  maxlength={8} value={this.state.cep}  placeholder='Digite um Cep' onChange={this.onChangeCep}/>
					
					
					<input type="submit" value="Buscar" />
				</Form>

				{this.state.isLoading === true &&
					<ProgressBar />
				}

				{(this.state.address && typeof this.state.address === 'object') &&
					<Address>
						<h2>Dados Recebidos</h2>
						{this.state.isCached === true
							?
							<p>CEP já pesquisado e estava presente no cache!</p>
							:
							<p>CEP nunca pesquisado e foi adicionado no Cache!</p>
						}
						<table>
							{Object.keys(this.state.address).map((key) => {
							    return (
							    	<tr key={key}>
								    	<td align="right">{key}:</td>
								    	<td>{this.state.address[key]}</td>
							    	</tr>
							    )
							})}
						</table>
					</Address>
				}
			</Container>
		)
	}
}

export default BuscaCep;