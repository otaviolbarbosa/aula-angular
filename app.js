var app = angular.module('ngApp', []);

app.controller('ContatosCtrl', function($scope) {
	$scope.contatos = [
		{nome: 'Otavio', telefone: '9999-8888', email: 'otavio@email.com'},
		{nome: 'Raquel', telefone: '1234-5678', email: 'raquel@email.com'},
		{nome: 'Jailson', telefone: '1111-2222', email: 'jailson@email.com'},
	];

	$scope.addContato = function(contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
	}

	$scope.delContato = function(contatos) {
		$scope.contatos = contatos.filter(function(c) {
			if(!c.selecionado) {
				return c;
			}
		});
	}
});