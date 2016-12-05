// Services

app.factory('ContatoFactory', function($http) {
	var obj = {}
	
	obj.loadContatos = function() {
		$http
			.jsonp('http://localhost/angular/contatos.json')
			.success(function(response) {
				console.log('Sucesso')
				console.log(response)
				return response
			})
			.error(function(response) {
				console.log('Erro')
				return []
			});
	}

	return obj;
});

app.service('ContatoService', function() {
	this.contatos = [
		{nome: 'Otavio', telefone: '9999-8888', email: 'otavio@email.com'},
		{nome: 'Raquel', telefone: '1234-5678', email: 'raquel@email.com'},
		{nome: 'Jailson', telefone: '1111-2222', email: 'jailson@email.com'},
		{nome: 'Jessica', telefone: '3333-2222', email: 'jessica@email.com'},
	];
});
