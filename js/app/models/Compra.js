class Compra{
	constructor(id, nome, quantidade, valor){
		this._id = id;
		this._nome = nome;
		this._quantidade = parseFloat(quantidade);
		this._valorUnitario = parseFloat(valor);
		Object.freeze(this);
	}

	get id(){
		return this._id;
	}
	get nome(){
		return this._nome;
	}
	get quantidade(){
		return this._quantidade;
	}
	get valorUnitario(){
		return this._valorUnitario;
	}
	get valorTotal(){
		return this._quantidade * this._valorUnitario;
	}

}