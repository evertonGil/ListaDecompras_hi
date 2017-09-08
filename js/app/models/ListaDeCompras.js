class ListaDeCompras{
	constructor(){
		this._lista = [];
		this._listaDeIds = [0];
	}

	adiciona(compra){
		this._lista.push(compra);
	}
	exclui(index){
		this._lista.splice(index, 1);
	}

	criaId(){
		var novoId = this._listaDeIds[this._listaDeIds.length - 1] + 1;
		//console.log(this._listaDeIds);
		this._listaDeIds.push(novoId);
		return novoId;
	}

	get lista(){
		return this._lista;
	}
}