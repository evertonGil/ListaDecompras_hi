class Mensagem{
	constructor(texto='', tipo = '', time = 300){
		this._texto = texto;
		this._tipo=  tipo;
		this._time = time;
	}

	get texto(){
		return this._texto;
	}
	get tipo(){
		return this._tipo;
	}
	get time(){
		return this._time;
	}

	executaFade(elemento, tag){
		setTimeout(n =>{
			let elementoMensagem = elemento.querySelector(tag);
			elementoMensagem.className += "fade";			
		 }, this._time);
		 return "";
	}

	set texto(texto){
		return this._texto = texto;
	}
	set time(time){
		return this._time = time;
	}
	set tipo(tipo){
		if(tipo !='' || tipo == 'success' || tipo == 'info' || tipo == 'warning' || tipo == 'danger')
			{return this._tipo = tipo;}
		else
			{throw Error('Faltou escolher um do tipos possiveis no lancamento da mensagem: success/info/warning/danger');}
		
	}
}