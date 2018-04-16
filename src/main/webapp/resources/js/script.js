$(document).ready(function(){
		
	var linhasGridProduto = $('#grid-produto tbody tr');
		linhasGridProduto.on('click', function () {
		linhasGridProduto.not(this).removeClass('colorir');
		$(this).toggleClass('colorir');
	});
		
	$('#btn-alterar-produto').click(function(){
		alert("alterar");
	});
	
	
});

function editar(linha){
	var atributos = linha.children;
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

function consultarDetalhe(produtoId){
	console.log(produtoId);
}