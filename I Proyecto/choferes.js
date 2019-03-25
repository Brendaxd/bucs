var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choferes = new Schema//esquema de mongoose
({
	NOMBRE: String,//campos de la tabla, se ingresan con un formulario en frontend
	EDAD: Number,
	CEDULA: Number,
	FOTO:String
});

module.exports = mongoose.model('Choferes',choferes);//clase