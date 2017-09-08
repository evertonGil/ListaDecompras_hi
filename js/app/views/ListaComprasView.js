class ListaComprasView extends View{

	constructor(elemento){
		super(elemento)
	}


	template(model){
		return `
		<table class="table">
	        <thead>
	            <tr class="row">
		            <th class="text-left" width="">#</th>
	                <th class="text-left" width="">NOME DO PRODUTO</th>
	                <th class="text-center" width="">QUANTIDADE</th>
	                <th class="text-right" width="">VALOR UNITÁRIO</th>
	                <th class="text-right" width="">VALOR TOTAL</th>
	                <td></td>
	            </tr>
	        </thead>
	        <tbody>
	        	${model.lista.map((n, index) =>`
					<tr class="row">
						<td class="col-6">${n.id}</td>
		        		<td>${n.nome}</td>
		        		<td class="text-center">${n.quantidade}</td>
		        		<td class="text-right">R$ ${n.valorUnitario.toFixed(2)}</td>
		        		<td class="text-right">R$ ${n.valorTotal.toFixed(2)}</td>
		        		<td><a href="" onclick="compraController.excluiCompra(event, ${index})"><i class="fa fa-trash fa-1x delete" aria-hidden="true"></i></a></td>
	        		</tr>
	        		`).join('')}
	        </tbody>
	        <tfoot>
	        <tr class="row">
	        	<td colspan="3"></td>
	        	<td colspan="1" class="text-right"><h3>Total da compra</h3></td>
	        	<td class="text-right">
	        		<h3>R$
	        		${model.lista.reduce((total, n) => total+=n.valorTotal, 0.00).toFixed(2)}
	        		</h3>
	        	</td>
	        	<td></td>
	        </tr>
	        </tfoot>
	    </table>
		`;
	};
}