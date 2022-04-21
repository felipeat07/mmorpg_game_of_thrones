module.exports.index = function(application, req, res){
	res.render('index', {validacao: {}});
}

module.exports.autenticar = function(application, req, res){
	
	var dadosForm = req.body;

	req.assert('usuario', 'Usuário não deve ser vazio').notEmpty();
	req.assert('senha', 'Senha não deve ser vazio').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render("index", {validacao: errors});
		console.log(errors);
		return;
	}

	res.send('teste, ir para autenticação');

}