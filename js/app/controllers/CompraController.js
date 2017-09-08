class CompraController{
	constructor(){
		let $select = document.querySelector.bind(document);
		this._inputNomeProduto = $select("#nomeProduto");
		this._inputQuantidade = $select("#quantidade");
		this._inputValor = $select("#valor");
		this._listaDeCompras = new ListaDeCompras();
		this._listaComprasView = new ListaComprasView($select("#listaComprasView"));
		this._listaComprasView.update(this._listaDeCompras);
		this._mensagem = new Mensagem();
		this._mensageView = new MensagemView($select("#mensagemView"));
	}

	adiciona(event){
		event.preventDefault();
		
		this._listaDeCompras.adiciona(this._criaCompra());
		this._mensagem.texto = "Item adicionado com sucesso!";
		this._mensagem.tipo = "success";
		this._mensagem.time = 1400;
		//console.log(this._listaDeCompras.lista);
		this._listaComprasView.update(this._listaDeCompras);
		this._mensageView.update(this._mensagem);

		this._limpaFormulario();
	}

	_criaCompra(){
		let compra = new Compra(this._listaDeCompras.criaId(), this._inputNomeProduto.value, this._inputQuantidade.value, this._inputValor.value);
		return compra;
	}


	excluiCompra(event, index){
		event.preventDefault();
		//console.log("ecluir: "+index);

		this._mensagem.texto = "Item excluído da lista!";
		this._mensagem.tipo = "warning";
		this._mensagem.time = 1400;
		this._listaDeCompras.exclui(index);
		this._listaComprasView.update(this._listaDeCompras);
		this._mensageView.update(this._mensagem);
	}


	_limpaFormulario(){
		this._inputNomeProduto.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
		this._inputNomeProduto.focus();
	}
	

}