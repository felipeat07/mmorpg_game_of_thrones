// Importando o mondoDB
var mongo = require('mongodb');

var connMongoDB = function(){
    
    var db = new mongo.Db(
        'got',
        new mongo.Server('localhost', 27017, {}),
        {} //configurações do servidor
    )
    
    return db;

}


module.exports = function(){
    return connMongoDB;
}