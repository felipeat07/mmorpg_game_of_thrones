module.exports.cadastro = function(application, req, res){
    res.render('cadastro.ejs', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('nome', 'O campo Nome não pode estar vazio').notEmpty();
    req.assert('usuario', 'O campo Usuário não pode estar vazio').notEmpty();
    req.assert('senha', 'O campo Senha não pode estar vazio').notEmpty();
    req.assert('casa', 'O campo Casa não pode estar vazio').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('cadastro', {validacao: errors, dadosForm: dadosForm})
        return;
    }

        res.send('podemos continuar com o cadastro');

}