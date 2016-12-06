// Services

app.factory('ContatoFactory', function($http) {
	var obj = {}
	obj.loadContatos = function() {
		return $http.jsonp('http://localhost/angular/contatos.json')
	}

	return obj;
});

app.service('ContatoService', function($http) {
	this.loadContatos = function() {
		return $http.jsonp('http://localhost/angular/contatos.json')
	}

});
