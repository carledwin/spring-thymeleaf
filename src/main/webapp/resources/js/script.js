var produto = {id:0, nome:'', preco:0};
$(document).ready(function(){
		
	//capturaLinhaSelecionada();
	
	//escondeBotoes();
	
	$('#btn-alterar-produto').click(function(){
		alert("alterar");
	});
	
	$('#btn-cancelar-alterar-produto').click(function(){
		//$('modal-alterar-produto').modal().hide();
	});
	
	
	
	
});

function capturaLinhaSelecionada(){
	var linhasGridProduto = $('#grid-produto tbody tr');
	linhasGridProduto.on('click', function () {
	linhasGridProduto.not(this).removeClass('colorir');
	$(this).toggleClass('colorir');
});
}

function escondeBotoes(){
	$('#botoes').hide();
}

function exibeBotoes(){
	$('#botoes').show();
}

function edita(linha){
	
	$('#grid-produto tbody tr').each(function(){
		$('#grid-produto tbody tr').not(linha).removeClass('colorir');
	});
		
		$(linha).toggleClass('colorir');
		
		if($(linha).hasClass('colorir') ==true){
			var atributos = $(linha).children();
			var produto = {id:0, nome:'', preco:0};
			var tdId = atributos[1];
			var tdNome = atributos[2];
			var tdPreco = atributos[3];

			produto.id = $(tdId).text();
			produto.nome = $(tdNome).text();
			produto.preco = $(tdPreco).text();
			
			$('#produtoSelecionado-id').val(produto.id);	
			$('#produtoSelecionado-nome').val(produto.nome);
			$('#produtoSelecionado-preco').val(produto.preco);
			
			console.log(produto);

		}
	
	
	
	
	/*var atributos = linha.children;
	var produto = {id:0, nome:'', preco:0};
	var tdId = atributos[1];
	var tdNome = atributos[2];
	var tdPreco = atributos[3];

	produto.id = $(tdId).text();
	produto.nome = $(tdNome).text();
	produto.preco = $(tdPreco).text();
	
	$('#produtoSelecionado-id').val(produto.id);	
	$('#produtoSelecionado-nome').val(produto.nome);
	$('#produtoSelecionado-preco').val(produto.preco);
	
	$('#modal-alterar-produto').show();
	
	console.log(produto);
*/	
}

function consultarDetalhe(produtoId){
	$('#btn-exibir-detalhe').show();
	console.log(produtoId);
}