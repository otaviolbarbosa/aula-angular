var app = angular.module('ngApp', []);

app.controller('ContatosCtrl', function($scope, ContatoService, $http) {

	//$scope.contatos = ContatoService.contatos;
	ContatoService.loadContatos()
		.success(function(data, status) {
			console.log(status)
			$scope.contatos = data
		})
	
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